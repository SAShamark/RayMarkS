(function () {
  var uk = {
    nav: ['Головна', 'Студія', 'Портфоліо', 'Контакти', 'Приватність'],
    heroDescription: 'Ми створюємо ігри та інтерактивні враження, у які хочеться грати, які хочеться пам’ятати й якими хочеться ділитися.', heroAction: 'переглянути наші ігри',
    aboutTitle: 'про <span class="text-accent">студію</span>', eyebrow: 'Незалежна ігрова студія', studioHeading: 'Студія, створена навколо <span>ідей для гри.</span>',
    studioText: 'Ray MarkS Studio — незалежна практика з розробки ігор під керівництвом Олександра Марковського. Ми створюємо цілісні ігрові досвіди з чітким геймплеєм, надійною технічною основою та підходом, орієнтованим на продакшн.',
    explore: 'Переглянути портфоліо', touch: 'Зв’язатися', focus: 'Фокус студії', studioFocus: ['Розробка ігор', 'Геймплейні системи', 'Unity та C#'], teamEyebrow: 'Люди за студією', teamHeading: 'Команда.', founder: 'Засновник і розробник ігор', founderText: 'Unity- та C#-розробник, що створює ігри, геймплейні системи й практичні функції для реального продакшну.', cv: 'Переглянути CV розробника',
    portfolioTitle: 'наше <span class="text-accent">портфоліо</span>', original: 'Оригінальні ігри', commercial: 'Комерційні та командні проєкти', collaborations: 'Вибрані співпраці',
    contactTitle: 'давайте <span class="text-accent">поговоримо</span>', contactHeading: 'Працюймо разом.', contactText: 'Маєте ідею гри або пропозицію для співпраці? Давайте обговоримо.', email: 'Пошта', games: 'Ігри', form: ['ВАШЕ ІМ’Я', 'ВАША ПОШТА', 'ТЕМА', 'ВАШЕ ПОВІДОМЛЕННЯ'], send: 'надіслати повідомлення',
    legal: 'Юридична інформація', privacyTitle: 'центр <span class="text-accent">приватності</span>', privacyText: 'Інформація про приватність і прямі посилання на політики продуктів Ray MarkS Studio.', policyAvailable: 'Політика приватності доступна', viewPolicy: 'Переглянути політику', deleteData: 'Видалити дані акаунта',
    footerText: 'Незалежна ігрова студія, що створює ігри та інтерактивні враження, у які хочеться грати, які хочеться пам’ятати й якими хочеться ділитися.', footerCta: 'Працюймо разом', exploreFooter: 'Навігація', contactFooter: 'Контакти', follow: 'Стежте за нами', rights: 'Усі права захищено.'
  };
  var entries = [
    ['text', '#desktop-nav .desktop-nav-element h2', 'nav'], ['text', '#mobile-nav .mobile-nav-element span', 'nav'], ['text', '[data-i18n="hero-description"]', 'heroDescription'], ['text', '[data-i18n="hero-action"]', 'heroAction'],
    ['html', '#about .section-title-primary', 'aboutTitle'], ['text', '#about .studio-intro__copy .studio-eyebrow', 'eyebrow'], ['html', '#about .studio-intro__copy h3', 'studioHeading'], ['text', '#about .studio-intro__copy > p:not(.studio-eyebrow)', 'studioText'], ['label', '#about .studio-button--primary', 'explore'], ['text', '#about .studio-button:not(.studio-button--primary)', 'touch'], ['text', '#about .studio-intro__brand .studio-eyebrow', 'focus'], ['text', '#about .studio-intro__brand li span', 'studioFocus'], ['text', '#about .studio-section-heading .studio-eyebrow', 'teamEyebrow'], ['text', '#about .studio-section-heading h3', 'teamHeading'], ['text', '#about .team-member__role', 'founder'], ['text', '#about .team-member__content > p:not(.team-member__role)', 'founderText'], ['label', '#about .team-member__actions a:first-child', 'cv'],
    ['html', '#portfolio .section-title-primary', 'portfolioTitle'], ['text', '#portfolio .portfolio-section-heading:first-child p', 'original'], ['text', '#portfolio .portfolio-section-heading--secondary p', 'commercial'], ['text', '#portfolio .portfolio-section-heading--secondary h3', 'collaborations'],
    ['html', '#contact .section-title-primary', 'contactTitle'], ['text', '#contact .contact-details h3', 'contactHeading'], ['text', '#contact .contact-details > p', 'contactText'], ['text', '#contact .contact-email small', 'email'], ['text', '#contact .contact-play small', 'games'], ['placeholder', '#contact-form input, #contact-form textarea', 'form'], ['text', '#contact-form .contact-submit > span:first-child', 'send'],
    ['text', '#privacy .text-accent.mb-16', 'legal'], ['html', '#privacy .section-title-primary', 'privacyTitle'], ['text', '#privacy .font-Open-sans', 'privacyText'], ['text', '#privacy .privacy-policy-card__status', 'policyAvailable'], ['text', '#privacy .privacy-policy-card small', 'viewPolicy'], ['label', '#privacy .privacy-policy-card__links a', 'deleteData'],
    ['text', '.site-footer__brand p', 'footerText'], ['label', '.site-footer__cta', 'footerCta'], ['text', '.site-footer__column:nth-of-type(1) h2', 'exploreFooter'], ['text', '.site-footer__column:nth-of-type(2) h2', 'contactFooter'], ['text', '.site-footer__column:nth-of-type(3) h2', 'follow'], ['label', '.site-footer__column:nth-of-type(2) a:last-child', 'send']
  ];
  var original = [];
  function get(element, type) { return type === 'html' ? element.innerHTML : type === 'placeholder' ? element.placeholder : type === 'label' ? element.firstChild.nodeValue : element.textContent; }
  function put(element, type, value) { if (type === 'html') element.innerHTML = value; else if (type === 'placeholder') element.placeholder = value; else if (type === 'label') element.firstChild.nodeValue = value + ' '; else element.textContent = value; }
  entries.forEach(function (entry) { original.push(Array.from(document.querySelectorAll(entry[1])).map(function (element) { return get(element, entry[0]); })); });
  function setLanguage(language) {
    document.documentElement.lang = language === 'uk' ? 'uk' : 'en'; window.raymarksLanguage = language;
    document.title = language === 'uk' ? 'Ray MarkS Studio — незалежна студія розробки ігор' : 'Ray MarkS Studio — Independent Game Development Studio';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'uk' ? 'Ray MarkS Studio — незалежна ігрова студія з портфоліо ігор, геймплейних систем і розробки на Unity та C#.' : 'Ray MarkS Studio is an independent game development studio showcasing Unity and C# game projects, gameplay systems and development work.';
    entries.forEach(function (entry, index) { var values = language === 'uk' ? uk[entry[2]] : original[index]; Array.from(document.querySelectorAll(entry[1])).forEach(function (element, itemIndex) { put(element, entry[0], Array.isArray(values) ? values[itemIndex] : values); }); });
    document.querySelectorAll('[data-language]').forEach(function (button) { var active = button.dataset.language === language; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    document.querySelector('.site-footer__bottom > span').textContent = '© 2026 Ray MarkS Studio. ' + (language === 'uk' ? uk.rights : 'All rights reserved.');
    window.localStorage.setItem('raymarks-language', language); window.dispatchEvent(new CustomEvent('raymarks:languagechange', { detail: { language: language } }));
  }
  document.querySelectorAll('[data-language]').forEach(function (button) { button.addEventListener('click', function () { setLanguage(button.dataset.language); }); });
  setLanguage(window.localStorage.getItem('raymarks-language') || 'en');
})();
