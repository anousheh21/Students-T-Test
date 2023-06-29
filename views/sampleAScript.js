document.addEventListener("DOMContentLoaded", () => {
    const buttonA = document.querySelector('.asubmit')
    const subheadingA = document.querySelector('.asubheading')
    const inputA = document.querySelector('.ainput')
    const addItemsA = document.getElementById('addItemsA')
    let a = ''
    let totalA = 0;
    let meanA = 0;
    let squareA = 0;
    const bURL = 'http://localhost:3000/sampleB.html'

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
                // Creates number input boxes for sample a
                let input = document.createElement("input")
                input.type = "number"
                input.name = "aValue" + i
                input.classList.add("aValue", "dataValueInput", "dataValueInputA" + i)
                addItemsA.appendChild(input)
                addItemsA.appendChild(document.createElement("br"))
            }
            // Creates button to submit data values for sample a
            let dataButtonA = document.createElement("button")
            dataButtonA.classList.add("dataButton", "dataButtonA")
            dataButtonA.textContent = "Submit A"
            dataButtonA.type = "submit"
            addItemsA.appendChild(dataButtonA)
    
            // Adds functionality to dataButtonA
            dataButtonA.addEventListener('click', () => {
                let sampleSizeA = i;
                for(i=0; i<a; i++) {
                    let value = document.querySelector('.dataValueInputA' + i ).value 
                    totalA += parseInt(value)
                    squareA += Math.pow(parseInt(value),2)
                }
                meanA = totalA / sampleSizeA;
                localStorage.setItem('totalA', totalA)
                localStorage.setItem('meanA', meanA)
                localStorage.setItem('squareA', squareA)
                localStorage.setItem('sampleSizeA', sampleSizeA)
                window.location.assign(bURL)
            })
        }
        
    })
})



