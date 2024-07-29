function customRender(reactElement, container){

    //creating the element of "a" type by refering .type
    const domElement = document.createElement(reactElement.type)
    //setting the text for the element
    domElement.innerHTML = reactElement.children
    // setting the functionality for the element using the index in props object

    for(const prop in reactElement.props) {
        //if(prop == 'children') continue; not needed now

        //setting the properties (ElementWhichyouWantToSetAttribute, whichFunctionalityYouWantToApply)
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

//creating state?
const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)