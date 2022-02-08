var plus = document.querySelectorAll('.plus-btn')
var minus = document.querySelectorAll('.minus-btn')

console.log(plus)
 // increment 

for (let i=0; i< plus.length ; i++){

    plus[i].addEventListener('click' , function(){

        plus[i].nextElementSibling.innerHTML++
        total()
    }
}

for (let i=0; i< minus.length ; i++){
  

    minus[i].addEventListener('click' , function(){

        if(minus[i].previousElementSibling.innerHTML>0)

        minus[i].nextElementSibling.innerHTML--
        total()
    }
}
// like

var hearts = document.querySelectorAll('.heart')
for (let heart in hearts ){

    heart.addEventListener('click', function(){
        heart.classlist.toggle('style')
        total()
    })
}

//remove

var supp=document.querySelectorAll('.supp')
for(let sup of supp){
    sup.addEventListener('click',function(){
        sup.parentElement.parentElement.parentElement.remove()
total()
    })
}

//total

function total(){

    var quantity=document.querySelectorAll('.quantity')
    var priceunitaire= document.querySelectorAll('.price')
    var total=document.querySelectorAll('.total')
    var resultat=0
    
    for (let i=0; i< quantity.length ;i++){

        resultat=resultat+(number(quantity[i].innerHTML)* number (priceuntitaire[i].innerHTML)

    }
    total.innerHTML=resultat
