export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  massage: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  weight: document.querySelector('#weight'),
  height: document.querySelector('#height'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
};

Modal.buttonClose.onclick = () => {
  Modal.close();
  weight.value = '';
  height.value = '';
};

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close();
    weight.value = '';
    height.value = '';
  }
}
