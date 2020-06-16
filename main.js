// add button to the body tag using js only - done!
// add a main tag to the body tag using js only -done!
// add an image and an anchor tag to tha main tag using js only -done!
// add an image source to the image tag -done!
// add a link to the anchor tag -done!

const bodyElement = document.querySelector('body')
const scriptElement = document.querySelector('script')

const buttonElement = document.createElement('button')
buttonElement.append('REMOVE')
bodyElement.prepend(buttonElement)

const mainElement = document.createElement('main')
bodyElement.insertBefore(mainElement, scriptElement)

let imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/c/800/chocolate-almond-biscotti.jpg?vd=20180710T043943Z&hash=0F61B2A531CF290F939F86EA75031EA2A58FB584'
imageElement.style.height = '500px'
mainElement.append(imageElement)
let anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.append('Link to recipe for chocolate almond biscotti')
anchorElement.href = 'https://www.mccormick.com/recipes/dessert/chocolate-almond-biscotti'
mainElement.append(anchorElement)

buttonElement.addEventListener('click', function () {
    mainElement.remove()
    console.log('remove button clicked')
})