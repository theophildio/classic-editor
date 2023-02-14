// Function to get the elements
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Get the text area value
function getTextAreaValue(id) {
    const textArea = document.getElementById(id);
    return textArea;
}

// Text decoration
function textDecoration(className) {
    const textOutput =  textArea.classList.toggle(className);
    return textOutput;
}
