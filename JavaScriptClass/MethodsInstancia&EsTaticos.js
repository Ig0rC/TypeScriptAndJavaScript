class PasswordSystem {
    constructor (){
        this.row = 0;

    }
    

    // Methods Instancia
    nextPassWord() {
        this.row += 1;
        console.log(this.row)
    }
    
    callPassword(){
        console.log(`PassWord`);
    }

    // Methods Static
    static Sound (){
        console.log('Pli')
    }

}






const guiche = new PasswordSystem();


guiche.nextPassWord();
PasswordSystem.Sound();
guiche.nextPassWord();
PasswordSystem.Sound();
