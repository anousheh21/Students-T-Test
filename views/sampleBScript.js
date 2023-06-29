document.addEventListener("DOMContentLoaded", () => {
    const buttonB = document.querySelector('.bsubmit')
    const subheadingB = document.querySelector('.bsubheading')
    const inputB = document.querySelector('.binput')
    const addItemsB = document.getElementById('addItemsB')
    let b = ''
    let totalB = 0;
    let meanB = 0;
    let squareB = 0;
    const resultsURL = 'http://localhost:3000/results.html'
  
    buttonB.addEventListener('click', () => {
      let b = inputB.value;
      if (b == '') {
        subheadingB.textContent = 'Values Required'
      } else if (b < 3 || b > 15) {
        subheadingB.textContent = 'Invalid Sample Size'
      } else {
        subheadingB.textContent = 'Data Set';
        inputB.remove();
        buttonB.remove();
        for (let i = 0; i < b; i++) {
          // Creates number input boxes for sample b
          let input = document.createElement("input")
          input.type = "number"
          input.name = "bValue" + i
          input.classList.add("bValue", "dataValueInput", "dataValueInputB" + i)
          addItemsB.appendChild(input)
          addItemsB.appendChild(document.createElement("br"))
        }
        // Creates button to submit data values for sample b
        let dataButtonB = document.createElement("button")
        dataButtonB.classList.add("dataButton", "dataButtonB")
        dataButtonB.textContent = "Submit B"
        addItemsB.appendChild(dataButtonB)

  
        // Adds functionality to dataButtonB
        dataButtonB.addEventListener('click', () => {
          let sampleSizeB = b; 
          for (let j = 0; j < b; j++) { 
            let value = document.querySelector('.dataValueInputB' + j).value
            totalB += parseInt(value)
            squareB += Math.pow(parseInt(value),2)
          }
          meanB = totalB / sampleSizeB;
          localStorage.setItem('totalB', totalB)
          localStorage.setItem('meanB', meanB)
          localStorage.setItem('squareB', squareB)
          localStorage.setItem('sampleSizeB', sampleSizeB)
          window.location.assign(resultsURL)
          //window.location.href = resultsURL + '?meanB=' + meanB
        })
        
      }
    })
  })
  