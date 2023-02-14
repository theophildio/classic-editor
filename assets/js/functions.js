// Function to get the elements
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Function to get the text area
function getTextArea(id) {
    const textArea = document.getElementById(id);
    return textArea;
}

// Function to text decoration
function textDecoration(className) {
    const textOutput =  textArea.classList.toggle(className);
    return textOutput;
}

// Function to toggle to change text decoration and style
function toggleToChanges(element, getClassName) {
    const output = element.addEventListener('click', function(e) {
        textDecoration(getClassName);
    })
    return output;
}

// Function to text alignment
function textAlign(element, textArea, value) {
    const textAlign = element.addEventListener('click', function() {
        textArea.style.textAlign = value;
    })
    return textAlign;
}