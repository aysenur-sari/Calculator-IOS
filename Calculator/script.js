let dataentry = document.querySelector(".dataentry")
let btnNumber = document.querySelectorAll ('.btnNumber');
let action = document.querySelectorAll ('.action')
let result = document.querySelector (".result");
let clear = document.querySelector (".delete");

clear.onclick = function (element) {
    dataentry.value = ""; 
};


btnNumber.forEach(function(element){
    element.onclick = function (e) {
        dataentry.value += this.textContent; // += değilde sadece = yazarsak yazılan sayıyı diğer sayının yanına eklemez sayıyı değiştirir
        
    }
});

action.forEach (function (element) {
    element.onclick = function(e){
        dataentry.value += this.textContent;
    }
    
})


result.onclick = function (element) {
    dataentry.value = eval(dataentry.value);
    
}






/*


let optDurum = false,opt="",sonuc=0;

let dataentry = document.querySelector(".dataentry")
let btnNumber = document.querySelectorAll ('.btnNumber');
let action = document.querySelectorAll ('.action')
let result = document.querySelector (".result");
let clear = document.querySelector (".delete");
let process = document.querySelector ('.process')
 
clear.onclick = function (element) {
    dataentry.value = ""; 
};
 


btnNumber.forEach(function(element){
    element.onclick = function (e) {
        if (dataentry.textContent=="0" || optDurum)
            dataentry.textContent="";
        dataentry.value += this.textContent; // += değilde sadece = yazarsak yazılan sayıyı diğer sayının yanına eklemez sayıyı değiştirir
        optDurum=false; 
    }
});

action.forEach (function (element) {
    element.onclick = function(e){
        optDurum=true;
        let yeniOpt=this.textContent

        process.textContent=process.textContent+" "+dataentry.textContent+" "+yeniOpt

        switch (opt)
        {
            case"+":dataentry.textContent=(sonuc + Number(dataentry.textContent)); break;
            case"-":dataentry.textContent=(sonuc - Number(dataentry.textContent)); break;
            default:break;
        }

        sonuc=Number(dataentry.textContent);
        opt=yeniOpt;
        dataentry.value += this.textContent;
    }
    
})
 




 // btnrakam numaralar   gosterge-ınput   btnopt-action+-*/  
 // islem-process 

/*
result.onclick = function (element) {
    dataentry.value = eval(dataentry.value);
    
}

*/





// detend[2]=addEventListener("click", print)

// detend.onclick= print

// function print() {
//     document.addEventListener(detend).innerHTML
    
//}


/*
for (var i=0;i<9;i++) {
    if (i != 0 && i != 18) {
        //console.log(detend[i])
        detend[i].addEventListener("click", print); // butonları tanımlaman lazım
    }
}

function print() {
    screen.value = screen.value + this.value
    console.log(screen.value);
}


makeEqual = addEventListener("click", account)

function account () {
    screen.value = eval (screen.value);
}

clear = addEventListener("click", clean)

function clean () {
    screen.value = "";
}
*/












/* 
const display = document.querySelector('.dataentry');

const keys = document.querySelector ('.keys')
// const firstkeys = document.querySelector('.first');
// const secondkeys = document.querySelector('.second');
// const thirdkeys = document.querySelector('.third');
// const fourthkeys = document.querySelector('.fourth');
// const fifthkeys = document.querySelector('.fifth');

let displayValue = '0';
 
updateDisplay();

function updateDisplay () {
    displayValue = displayValue ;
}

keys.addEventListener ("click", function(e){
    const element = e.target;

    console.log(element);
});
*/



/*
let detend = document.getElementsByTagName ("button");
// console.log(detend)  // CONSLA KAÇ BUTTON OLDUĞUNU YAZDIRDIK.

let dataentry = document.querySelector ("dataentry");
let number = document.querySelectorAll ("number");
let action = document.querySelectorAll ("action");
let makeEqual = document.querySelector ("makeEqual");
let clear = document.querySelector ("delete");


number.forEach(function(element){
    element.onclick = function(e) {
        console.log("kod çalişti")
    }
}
)
*/



