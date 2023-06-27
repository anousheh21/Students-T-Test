const buttonA = document.querySelector('.asubmit')
const buttonB = document.querySelector('.bsubmit')
const subheadingA = document.querySelector('.asubheading')
const subheadingB = document.querySelector('.bsubheading')
const inputA = document.querySelector('.ainput')
const inputB = document.querySelector('.binput')

buttonA.addEventListener('click', () => {
    let a = inputA.value;
    if(a=='') {
        subheadingA.textContent = 'Values Required'
    } else if (a < 5 || a > 15) {
        subheadingA.textContent = 'Invalid Sample Size'
    } else {
        subheadingA.textContent = 'Data Set';
    }
    
})

buttonB.addEventListener('click', () => {
    let b = inputB.value;
    if(b=='') {
        subheadingB.textContent = 'Values Required'
    } else if (b < 5 || b > 15) {
        subheadingB.textContent = 'Invalid Sample Size'
    } else {
        subheadingB.textContent = 'Data Set';
    }
})