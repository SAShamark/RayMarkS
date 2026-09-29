(function () {
  var modal = document.getElementById('project-modal');
  if (!modal) return;

  var details = {
    'Arrows': ['Original game', 'An atmospheric art-puzzle experience built around illustrated scenes and visual discovery.'],
    'WordKeeper': ['Original game', 'A playful word-learning experience with a character-led visual system.'],
    'Rocket Evolution': ['Original game', 'A sci-fi game project built around rocket-themed progression and discovery.'],
    'Tunnel Racing': ['Original game', 'A racing project built around high-speed tunnel runs.'],
    'Slimes Kingdom': ['Original game', 'A fantasy game world built around expressive slime characters.'],
    'Fugitive Bombs': ['Original game', 'A sci-fi game project currently being prepared for presentation.'],
    'Fighter Machines': ['Original game', 'A vehicle-combat game project.'],
    'Flappy Virus': ['Original game', 'An arcade project built around a playful virus character.'],
    'Beach Ball': ['Commercial & team project', 'A game project presented as part of the selected collaboration work.'],
    'Castle Clash: Tower Defense': ['Commercial & team project', 'A tower-defense game project presented as part of the selected collaboration work.'],
    'Pikamoon': ['Commercial & team project', 'A game project presented as part of the selected collaboration work.'],
    'Water Sort Puzzle: Color Tubes': ['Commercial & team project', 'A puzzle game project presented as part of the selected collaboration work.'],
    'The Matrix': ['Commercial & team project', 'A game project presented as part of the selected collaboration work.'],
    'Knight with Tactics': ['Commercial & team project', 'A tactical game project presented as part of the selected collaboration work.']
  };

  var title = document.getElementById('project-modal-title');
  var category = document.getElementById('project-modal-category');
  var description = document.getElementById('project-modal-description');
  var image = document.getElementById('project-modal-image');
  var dialog = modal.querySelector('.project-modal__dialog');
  var lastFocusedElement;

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('project-modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function openModal(card) {
    var caption = card.querySelector('figcaption');
    var artwork = card.querySelector('img');
    if (!caption || !artwork) return;
    var projectTitle = caption.textContent.trim();
    var projectDetails = details[projectTitle] || ['Project', 'Project information is being prepared for publication.'];
    lastFocusedElement = card;
    title.textContent = projectTitle;
    category.textContent = projectDetails[0];
    description.textContent = projectDetails[1];
    image.src = artwork.currentSrc || artwork.src;
    image.alt = artwork.alt;
    modal.hidden = false;
    document.body.classList.add('project-modal-open');
    dialog.focus();
  }

  document.querySelectorAll('.portfolio-showcase-grid figure').forEach(function (card) {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open details for ' + card.querySelector('figcaption').textContent.trim());
    card.addEventListener('click', function () { openModal(card); });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  modal.querySelectorAll('[data-project-modal-close]').forEach(function (control) {
    control.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
