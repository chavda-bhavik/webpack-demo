const { divide } = require("lodash");
const _ = require("lodash");
import './style.css'
import DemoImage from './image.jpg'
import CSV from './data.csv'
import XML from './Books.xml'

function component() {
    const element = document.createElement('div');

    // importing and using lodash
    element.innerHTML = _.join(['Hello','Webpack'], ' ');
    element.classList.add('hello');

    // adding image to existing div
    const myImage = new Image();
    myImage.src = DemoImage;
    myImage.classList.add('image');
    element.appendChild(myImage);

    // adding data
    console.log(CSV);
    console.log(XML);
    
    return element;
}

document.body.appendChild(component());