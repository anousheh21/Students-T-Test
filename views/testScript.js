// Variables

const buttonA = document.querySelector('.asubmit')
const buttonB = document.querySelector('.bsubmit')
const subheadingA = document.querySelector('.asubheading')
const subheadingB = document.querySelector('.bsubheading')
const inputA = document.querySelector('.ainput')
const inputB = document.querySelector('.binput')
const addItemsA = document.getElementById('addItemsA')
const addItemsB = document.getElementById('addItemsB')

// Main

buttonA.addEventListener('click', () => {
    let a = inputA.value;
    if(a=='') {
        subheadingA.textContent = 'Values Required'
    } else if (a < 3 || a > 15) {
        subheadingA.textContent = 'Invalid Sample Size'
    } else {
        subheadingA.textContent = 'Data Set';
        inputA.remove();
        buttonA.remove();
        for(i=0; i<a; i++) {
            let input = document.createElement("input")
            input.type = "number"
            input.name = "aValue" + i
            input.classList.add("aValue", "dataValueInput")
            addItemsA.appendChild(input)
            addItemsA.appendChild(document.createElement("br"))
        }
    }
    
})

buttonB.addEventListener('click', () => {
    let b = inputB.value;
    if(b=='') {
        subheadingB.textContent = 'Values Required'
    } else if (b < 3 || b > 15) {
        subheadingB.textContent = 'Invalid Sample Size'
    } else {
        subheadingB.textContent = 'Data Set';
        inputB.remove();
        buttonB.remove();
        for(i=0; i<b; i++) {
            let input = document.createElement("input")
            input.type = "number"
            input.name = "bValue" + i
            input.classList.add("bValue", "dataValueInput")
            addItemsB.appendChild(input)
            addItemsB.appendChild(document.createElement("br"))
        }
    }
})

