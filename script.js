var aud = new Audio('./31.mp3')

var h1 = document.querySelector('h1')

h1.addEventListener('click',function(dets){
    if(dets.code == 'KeyD'){
        aud.play()
    }
})