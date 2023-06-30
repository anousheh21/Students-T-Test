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
let cv = 0
const displayTValue = document.getElementById('tValue')
const displayDF = document.getElementById('df')
const displayCV = document.getElementById('cv')
let displayCompare = document.getElementById('compare')

// t - value Calculations
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

// Critical Value Calculations
if (df == 4) {
    cv = 2.776
} else if (df == 5) {
    cv = 2.571
} else if (df == 6) {
    cv = 2.447
} else if (df == 5) {
    cv = 2.571
} else if (df == 6) {
    cv = 2.447
} else if (df == 7) {
    cv = 2.365
} else if (df == 8) {
    cv = 2.306
} else if (df == 9) {
    cv = 2.262
} else if (df == 10) {
    cv = 2.228
} else if (df == 11) {
    cv = 2.201
} else if (df == 12) {
    cv = 2.179
} else if (df == 13) {
    cv = 2.160
} else if (df == 14) {
    cv = 2.145
} else if (df == 15) {
    cv = 2.131
} else if (df == 16) {
    cv = 2.120
} else if (df == 17) {
    cv = 2.110
} else if (df == 18) {
    cv = 2.101
} else if (df == 19) {
    cv = 2.093
} else if (df == 20) {
    cv = 2.086
} else if (df == 21) {
    cv = 2.080
} else if (df == 22) {
    cv = 2.074
} else if (df == 23) {
    cv = 2.069
} else if (df == 24) {
    cv = 2.064
} else if (df == 25) {
    cv = 2.060
} else if (df == 26) {
    cv = 2.056
} else if (df == 27) {
    cv = 2.052
} else if (df == 28) {
    cv = 2.048
} else {
    cv = 'Error'
}

// Comparing Calculated T-Value With Critical Value
if (Math.abs(t) > cv) {
    displayCompare.textContent = `Reject H0. Significant difference between the two data sets`
} else if (Math.abs(t) < cv) {
    displayCompare.textContent = `Fail to reject H0. No significant difference between the two data sets.`
}

// Display
displayTValue.textContent = 't-value: ' + t
displayDF.textContent = 'df: ' + df
displayCV.textContent = 'critical value: ' + cv

