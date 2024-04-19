// Liquid refused to load this script tag into a snippet, so I inlined it.
(() => {
  const dateElements = document.querySelectorAll('[data-js="blog-redirect"]');

  dateElements.forEach((select) => {
    select.addEventListener("change", () => {
      console.log('Select changed');
    });
  });
})();

console.log('Bonk!');
