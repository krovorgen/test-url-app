const link = document.querySelector("[data-open-link]");

link!.addEventListener("click", function () {
  let isSafariBrowser = false;
  const url = link.dataset.openLink;

  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1) {
    isSafariBrowser = ua.indexOf('chrome') === -1;
  }
  if (isSafariBrowser) {
    window.open(url, '_system')
  } else {
    window.open(url, '_blank');
  }
  return false;
})

