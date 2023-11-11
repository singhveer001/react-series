// This is a simplified version of how React works to build user interfaces on web pages. 
// In real React applications, this process is more advanced and efficient, 
// but this code gives you a basic idea of how it all begins.


function customRender(reactElement,container){
   /*
    const domElement = document.createElement(reactElement.type) // creating dom element
    domElement.innerHTML = reactElement.children  // adding children element in innerhtml
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    // enjecting dom element in container
    container.appendChild(domElement)
    */

    // here we write better code because upper code is not good for all case
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children' ) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        }
    container.appendChild(domElement)
}

// how actually react work underhood
const reactElement = {
    type : 'a',  // type => div p etc.(tells element is which type)
    props : {    // props is object and here we add properties
        href : 'https://google.com',
        target : '_blank',
    },
    children: 'click me to visit Google'   
}

// Selecting root element in js from html
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
