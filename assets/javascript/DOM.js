// create a new main element 
let newMain = document.createElement("main")
//newMain.className = 'main'
//newMain.id = 'main'
// and give it some content 
let newMainContent = document.createTextNode("MAIN")
// add the text node to the newly created div
newMain.appendChild(newMainContent);
//attaching newMain element to html body
document.body.append(newMain)

// create a new button element 
let newButton = document.createElement("Button")
// // and give it some content 
// let newContentButton = document.createTextNode("BUTTON");
// // add the text to newly created element
// newButton.appendChild(newContentButton)
// add the newly created element and its content into the DOM 
// let currentDivButton = document.getElementById("Button")
// document.body.insertBefore(section, currentDivButton)
//attaching newButton element to <body> of html 
document.body.append(newButton)

//create a new image element
let imgElement = document.createElement('img')
imgElement.className = 'image'
//attach image file to element
imgElement.src = 'https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dinosaur.png'

// add the newly created image element and its content into the DOM 
// let currentImgElement = document.getElementById("img")
// document.body.insertAfter(main, currentImgElement)
//attaching new image element to main from js
newMain.append(imgElement)

//create a new link element 
let linkElement = document.createElement('link')
linkElement.className = 'link'
//attach link anchor to element
linkElement.href = 'https://google.com'
// add the newly created link element and its content into the DOM 
// let currentLinkElement = document.getElementById("link")
// document.body.insertAfter(main, currentLinkElement)
//attaching linkElement  to main from js 
newMain.append(linkElement)

//Part 2 :Add a "click" event listener to the button element you created. On click, remove the <main> element node from the page. After clicking this button, the user should only see the button on the page 
newButton.addEventListener("click", function () {
    newMain.remove()
    imgElement.remove()
    linkElement.remove()
})
//To the body, add another text-type <input> and another new button.
const userInput = document.querySelector("")
document.body.append(userInput)
//Create an 'add element' button to the body
let addDivButton = document.createElement("addDivButton")
document.body.append(addDivButton)
// When the user clicks this button, it should create a DIV element and append it to the BODY, and should contain the text content provided by the user in the text box.
addDivButton.addEventListener("click", function () {
    let newDivElement = document.createElement('div')
    // add text node to the newly created div  
    newDivElement.appendChild(userInput)
    //attach new Div Element to body
    document.body.append(newDivElement)
})
