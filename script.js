var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    
    var num = 50 + Math.floor(Math.random()*50)
    
    console.log('Your file will be downloaded in',num/10,'seconds');

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);

    
    
})