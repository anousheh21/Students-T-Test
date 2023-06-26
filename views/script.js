const button = document.querySelector('.enterButton')
const testUrl = 'http://localhost:3000/test.html'

button.addEventListener('click', () => {
    window.location.assign(testUrl)
})



