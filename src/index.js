const _ = require("lodash");

function component() {
    const element = document.createElement('div');

    // importing and using lodash
    element.innerHTML = _.join(['Hello','Webpack'], ' ');
    element.classList.add('hello');
    
    return element;
}

document.body.appendChild(component());