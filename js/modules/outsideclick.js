export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach((useEvent) => {
      html.addEventListener(useEvent, handleOutsideClick);
    });
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute('data-outside');
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((useEvent) => {
        html.removeEventListener(useEvent, handleOutsideClick);
      });

      callback();
    }
  }
}
