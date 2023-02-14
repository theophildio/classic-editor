// Get all elements
const textArea = getTextAreaValue('text-area');
const textBold = getElement('text-bold');
const textItalic = getElement('text-italic');
const textUnderline = getElement('text-underline');

// Make text bold
textBold.addEventListener('click', function(e) {
    textDecoration('font-bold');
})

// Make text italic
textItalic.addEventListener('click', function(e) {
    textDecoration('italic');
})

// Make text underline
textUnderline.addEventListener('click', function(e) {
    textDecoration('underline');
})