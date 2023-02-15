// Get all elements
const textArea = getTextArea('text-area');
const textBold = getElement('text-bold');
const textItalic = getElement('text-italic');
const textUnderline = getElement('text-underline');
const textLeft = getElement('text-left');
const textCenter = getElement('text-center');
const textRight = getElement('text-right');
const textJustify = getElement('text-justify');
const textUppercase = getElement('text-uppercase');
const textSize = getElement('text-size');
const textColor = getElement('text-color');

// Make text bold
toggleToChanges(textBold, 'font-bold');

// Make text italic
toggleToChanges(textItalic, 'italic');

// Make text underline
toggleToChanges(textUnderline, 'underline');

// Make text left align
textAlign(textLeft, textArea, 'left');

// Make text center align 
textAlign(textCenter, textArea, 'center');

// Make text right align 
textAlign(textRight, textArea, 'right');

// Make text right align 
textAlign(textJustify, textArea, 'justify');

// Make text uppercase or lowercase
toggleToChanges(textUppercase, 'uppercase');

// Change text size 
textSize.addEventListener('change', function() {
    const textSizeValue = textSize.value;
    textArea.style.fontSize = `${textSizeValue}px`;
})

// Change text color
textColor.addEventListener('change', function() {
    const setColor = textColor.value;
    textArea.style.color = setColor;
})