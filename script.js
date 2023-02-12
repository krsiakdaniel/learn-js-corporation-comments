// === GLOBAL ELEMENT SELECTORS
const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');

// === TEXTAREA COUNTER
const inputHandler = () => {
  const textareaMaxChars = 150;
  const currentTextLength = textareaEl.value.length;
  const remainingChars =  textareaMaxChars - currentTextLength;

  // update counter value
  counterEl.textContent = remainingChars === 0 ? 'Text limit reached.' : remainingChars;
}

// listen for changes in textarea on event 'input' (when user types)
textareaEl.addEventListener('input', inputHandler);

// === FORM
const DELAY_2_SECONDS = 2000;
const MIN_TEXT_LENGTH = 5;

const submitHandler = (event) => {
  event.preventDefault();
  
  // get text what use wrote
  const text = textareaEl.value;
  console.log('user wrote:', text)

  // validate text (if contains #hashtag and the text is at least 5 chars long)
  if (text.includes('#') && text.length >= MIN_TEXT_LENGTH) {
    // handle 'valid' state
    formEl.classList.add('form--valid');
    
    setTimeout(() => {
      formEl.classList.remove('form--valid');
    }, DELAY_2_SECONDS)
  } else {
    // handle 'invalid' state
    formEl.classList.add('form--invalid');
    
    setTimeout(() => {
      formEl.classList.remove('form--invalid')
    }, DELAY_2_SECONDS)

    // focus textarea so user can continue typing
    textareaEl.focus();
  }

  // stop the function execution
  return;
}

// listen for when user submits the form
formEl.addEventListener('submit', submitHandler)