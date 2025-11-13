var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var h2 = document.querySelector('h2')

var a = 0

inc.addEventListener('click',function(){
    a++ 
    h2.innerHTML = a
})
dec.addEventListener('click',function(){
    a--
    h2.innerHTML = a
})