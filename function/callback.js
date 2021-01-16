function rand(min = 1000, max = 3000){
    const randNumber = Math.random() * (max - min) + min;
    return Math.floor(randNumber);
}


function fOne (callback){
    setTimeout(function() {
        console.log('F-One');
        if (callback) callback();
    }, rand());
}


function fTwo (callback){
    setTimeout(function() {
        console.log('F-Two');
        if (callback) callback();
    }, rand());
}
function fThree (callback){
    setTimeout(function() {
        console.log('F-Three');
        if (callback) callback();
    }, rand());
}

fOne(fOneCallback);

function fOneCallback(){
    fTwo(fTwoCallback);
}

function fTwoCallback(){
    fThree(f3Callback);
};

function f3Callback(){
    console.log('hello world');
}