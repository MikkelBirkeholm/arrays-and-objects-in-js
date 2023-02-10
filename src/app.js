import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/es/highlight.min.js'
import javascript from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/es/languages/javascript.min.js'
hljs.registerLanguage('javascript', javascript)

hljs.highlightAll();

const objectInput = document.querySelector('#obj-input')
const arrayInput = document.querySelector('#arr-input')
const goBtnObj = document.querySelector('#go-btn-obj')
const goBtnArr = document.querySelector('#go-btn-arr')
const resultObj = document.querySelector('#print-object')
const resultArr = document.querySelector('#print-array')
let myArray = ['Tekst', 80085, 'Tekst2']
let myObject = {
    firstName: 'Johnny',
    lastName: 'Cash',
    occupation: 'Musician',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ringOfFire: function () {
        window.open(this.url)
    }
}

goBtnObj.onclick = () => {
    if (objectInput.value === 'ringOfFire') {
        window.open(myObject.url)
    } else {
        resultObj.innerText = myObject[objectInput.value] ? myObject[objectInput.value] : 'Ikke fundet! Du skal referere til objektets keys.'
    }
}
goBtnArr.onclick = () => {
    resultArr.innerText = myArray[arrayInput.value] ? myArray[arrayInput.value] : `Ikke fundet! Du skal skrive et tal mellem 0 og ${myArray.length - 1}.`
}
