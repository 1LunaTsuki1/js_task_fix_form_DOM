'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.name;

  if (input.id) {
    label.setAttribute('for', input.id);
  }

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  input.parentElement.appendChild(label);
});

// write code here
