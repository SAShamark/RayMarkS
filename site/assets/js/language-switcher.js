(function () {
  var translations = {
    en: {
      'hero-kicker': 'Independent game development studio',
      'hero-description': 'Creating polished, memorable game experiences — from gameplay systems to release-ready products.',
      'hero-action': 'explore games'
    },
    uk: {
      'hero-kicker': 'Незалежна студія розробки ігор',
      'hero-description': 'Створюємо захопливі ігрові проєкти — від геймплейних систем до готового продукту.',
      'hero-action': 'переглянути ігри'
    }
  };

  var buttons = Array.from(document.querySelectorAll('[data-language]'));

  function setLanguage(language) {
    var dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = dictionary[element.dataset.i18n];
    });
    buttons.forEach(function (button) {
      var active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    window.localStorage.setItem('raymarks-language', language);
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.dataset.language); });
  });

  setLanguage(window.localStorage.getItem('raymarks-language') || 'en');
})();
