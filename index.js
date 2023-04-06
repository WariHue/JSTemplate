const text = document.getElementById('testText')
const btn = document.getElementById('testBtn')

btn.addEventListener('click', (e) => {
    text.innerText = 'WOW It run now!'
    console.log("It Clicked!")
})