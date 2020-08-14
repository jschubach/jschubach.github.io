//cribbed from tutorial here https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    //return outer div of main modal
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  console.log("modal activated");
  console.log(overlay);
  overlay.classList.add('active');
  console.log("overlay activated");
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
