const _ = require("lodash");
import printMe from './print'

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = "ClickMe to PrintMe";
    button.onclick = printMe
    
    // importing and using lodash
    element.innerHTML = _.join(['Hello','Webpack'], ' ');
    element.classList.add('hello');
    
    element.appendChild(button);
    return element;
}

document.body.appendChild(component());