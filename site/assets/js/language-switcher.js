(function () {
  var translations = {
    en: {
      'hero-description': 'We create games and interactive experiences built to be played, remembered and shared.',
      'hero-action': 'explore our games'
    },
    uk: {
      'hero-description': 'Ми створюємо ігри та інтерактивний досвід, щоб у них грали, їх пам’ятали й ними ділилися.',
      'hero-action': 'переглянути наші ігри'
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
