const button = document.querySelector('.enterButton')
const testUrl = 'http://localhost:3000/sampleA.html'

button.addEventListener('click', () => {
    window.localStorage.clear();
    window.location.assign(testUrl)
})



