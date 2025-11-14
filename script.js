var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver'
    },
]


var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
    
})