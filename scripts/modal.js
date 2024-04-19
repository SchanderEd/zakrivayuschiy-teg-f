const btn = document.querySelector('.save-button');
const closeBtn = document.querySelector('.modal__close-btn');
const modal = document.getElementById('modal');

const openModal = () => modal.showModal();

const closeModal = () => modal.close();

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);