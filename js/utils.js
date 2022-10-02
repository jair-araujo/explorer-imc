import { Modal } from './modal.js';

export function notANumber(value) {
  return isNaN(value) || value == '';
}

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.massage.innerText = message;
  Modal.open();
}
