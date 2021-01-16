(() =>{
    class ValidaFormulario {
        constructor() {
            this.form = document.querySelector('.cadastro');
            this.vezes = 0;
            this.eventos();
        };

        eventos () {
            this.form.addEventListener('submit', e => {
                this.handleSubmit(e);
            });
        }

        handleSubmit(e){
            e.preventDefault();
            console.log('dnv')
            const camposValidos =  this.checkForm();
            const senhasValidas = this.senhasValidas();

            console.log(camposValidos, senhasValidas)
            if(camposValidos && senhasValidas){
                alert('Enviado');
                this.form.submit();
            }
        };

        senhasValidas () {
            let valid = true;
            const senhaOne = this.form.querySelector('.senha');
            const senhaTwo = this.form.querySelector('.repetir');
            if(senhaOne.value !== senhaTwo.value){
                valid = false;
                this.enviaError(senhaOne, 'Campos senha e repetir senha precisar ser iguais')
                this.enviaError(senhaTwo, 'Campos senha e repetir senha precisar ser iguais')
            };
            console.log('executei')
            if(senhaOne.value.length < 6 || senhaOne.value.length > 12){
                valid = false;
                this.enviaError(senhaOne, 'Senha precisa ter 6 a 12 caracteres ')
            }
            return valid;
        }

        checkForm(){
            let valid = true;
            this.clearError();
            this.vezes++;
            console.log(this.vezes)
            for(let campos of this.form.querySelectorAll('.validar')){
                const label = campos.previousElementSibling.innerText;
                if(!campos.value) {
                    this.enviaError(
                        campos, 
                        `Campo ${label} não pode estar em branco`, 
                    );
                    valid = false;
                }
                console.log(valid, 'campos')

                if(campos.classList.contains('cpf')){
                    if(!this.validaCPF(campos)) valid = false;
                }
                console.log(valid,' cpf')

                if(campos.classList.contains('usuario')){
                    if(!this.validaUsuario(campos)) valid = false;
                }

            };
            return valid;
        };

        validaUsuario (campos){
            const usuario = campos.value;
            let valid = true;
            if(usuario.length > 12 || usuario.length < 3) {
                this.enviaError(campos, 'Usuário deverá ter entre 3 e 12 caracteres')
                valid = false
            };

            if(!usuario.match(/[a-zA-Z0-0]+/g)) {
                this.enviaError(campos, 'Nome de usuário precisar conter apenas letras e/ou numeros')
                valid = false
            };
            return valid;
        }

        validaCPF(campo) {
            const cpf = new ValidandoCPF(campo.value);
            if(!cpf.verification()){
                this.enviaError(campo, 'CPF inválido')
                return false;
            }
            return true;
        }

        clearError() {
            for(let errorText of this.form.querySelectorAll('.error-text')){
                errorText.remove();
            }
        }

        enviaError(campos, msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            campos.insertAdjacentElement('afterend', div);
        };
        
     
    }


    const valida = new ValidaFormulario();
})();


