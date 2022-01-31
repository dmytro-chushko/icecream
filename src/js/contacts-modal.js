(() => {
  const refs = {
    oneopenModalBtn: document.querySelector('[data-modal-open]'),
    ccloseModalBtn: document.querySelector('[data-modal-close]'),
    mmodal: document.querySelector('[data-modal]'),
  };

  refs.oneopenModalBtn.addEventListener('click', toggleModal);
  refs.ccloseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mmodal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  };
})();

(() => {
  const refs = {
    twoopenModalBtn: document.querySelector('[data-modal-open-two]'),
    twocloseModalBtn: document.querySelector('[data-modal-close-two]'),
    twomodal: document.querySelector('[data-modal-two]'),
  };

  refs.twoopenModalBtn.addEventListener('click', toggleModal);
  refs.twocloseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.twomodal.classList.toggle('is-hidden');
  };
})();

(() => {
  const refs = {
    threeopenModalBtn: document.querySelector('[data-modal-open-three]'),
    threecloseModalBtn: document.querySelector('[data-modal-close-three]'),
    threemodal: document.querySelector('[data-modal-three]'),
  };

  refs.threeopenModalBtn.addEventListener('click', toggleModal);
  refs.threecloseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.threemodal.classList.toggle('is-hidden');
  };
})();