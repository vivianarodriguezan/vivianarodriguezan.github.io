/* Viviana Rodriguez — site behavior. No dependencies. */
(function () {
  'use strict';

  // ---- Photo lightbox (home page only) --------------------------------
  var expandBtn = document.getElementById('expand-photo');
  var lightbox = document.getElementById('lightbox');

  if (expandBtn && lightbox) {
    var photo = document.getElementById('vivi-photo');
    var lightboxImg = lightbox.querySelector('img');

    function openLightbox() {
      if (!photo) return;
      lightboxImg.src = photo.getAttribute('data-full') || photo.currentSrc || photo.src;
      lightbox.hidden = false;
    }
    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = '';
    }

    expandBtn.addEventListener('click', openLightbox);
    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }
})();
