// Local Storage Variables
let meanBValue = localStorage.getItem('meanB')
let meanAValue = localStorage.getItem('meanA')
let totalBValue = localStorage.getItem('totalB')
let totalAValue = localStorage.getItem('totalA')
let squareBTotal = Math.pow(totalBValue, 2)
let squareATotal = Math.pow(totalAValue, 2)
let squareASum = localStorage.getItem('squareA')
let squareBSum = localStorage.getItem('squareB')
let sizeB = localStorage.getItem('sampleSizeB')
let sizeA = localStorage.getItem('sampleSizeA')

// Other Variables
const displayResults = document.getElementById('results')

// Calculations
let df = (sizeA - 1) + (sizeB - 1)
let numerator = meanAValue - meanBValue
let denom1 = (1/sizeA) + (1/sizeB)
let denom2a = squareASum - (squareATotal/sizeA)
let denom2b = squareBSum - (squareBTotal/sizeB)
let denom3 = 1/df
let denom2 = denom2a + denom2b
let denominatorSquare = denom1 * denom2 * denom3
let denominator = Math.sqrt(denominatorSquare)
let t = numerator/denominator

displayResults.textContent = t

