// === TEXTAREA COUNTER
const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');

const inputListener = () => {
  const textareaMaxChars = 150;
  const currentTextLength = textareaEl.value.length;
  const remainingChars =  textareaMaxChars - currentTextLength;

  // update counter value
  counterEl.textContent = remainingChars === 0 ? "Text limit reached." : remainingChars;
}

// listen for changes in textarea on event 'input' (when user types)
textareaEl.addEventListener('input', inputListener);

