(function () {
  var modal = document.getElementById('project-modal');
  if (!modal) return;

  var details = {
    'Arrows': ['Original game', 'An atmospheric art-puzzle experience built around illustrated scenes and visual discovery.', {
      gallery: [
        ['assets/img/projects/arrows/lantern-in-rain.png', 'Lantern in rain'],
        ['assets/img/projects/arrows/glasshouse-at-dawn.png', 'Glasshouse at dawn'],
        ['assets/img/projects/arrows/night-train.png', 'Night train compartment']
      ],
      youtube: '_R9WsINO3UM'
    }],
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
  var extra = document.getElementById('project-modal-extra');
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
    extra.replaceChildren();
    renderExtra(projectDetails[2]);
    modal.hidden = false;
    document.body.classList.add('project-modal-open');
    dialog.focus();
  }

  function renderExtra(projectExtra) {
    if (!projectExtra) return;
    if (projectExtra.video) {
      var videoSection = document.createElement('section');
      var videoHeading = document.createElement('h3');
      var video = document.createElement('video');
      videoSection.className = 'project-modal__section';
      videoHeading.textContent = 'Video';
      video.className = 'project-modal__video';
      video.controls = true;
      video.preload = 'metadata';
      video.src = projectExtra.video;
      videoSection.append(videoHeading, video);
      extra.append(videoSection);
    }
    if (projectExtra.youtube) {
      var youtubeSection = document.createElement('section');
      var youtubeHeading = document.createElement('h3');
      var youtubeFrame = document.createElement('iframe');
      youtubeSection.className = 'project-modal__section';
      youtubeHeading.textContent = 'Gameplay video';
      youtubeFrame.className = 'project-modal__video-frame';
      youtubeFrame.src = 'https://www.youtube-nocookie.com/embed/' + projectExtra.youtube + '?rel=0';
      youtubeFrame.title = 'Gameplay video';
      youtubeFrame.loading = 'lazy';
      youtubeFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      youtubeFrame.allowFullscreen = true;
      youtubeSection.append(youtubeHeading, youtubeFrame);
      extra.append(youtubeSection);
    }
    if (projectExtra.gallery && projectExtra.gallery.length) {
      var gallerySection = document.createElement('section');
      var galleryHeading = document.createElement('h3');
      var gallery = document.createElement('div');
      gallerySection.className = 'project-modal__section';
      galleryHeading.textContent = 'Screenshots';
      gallery.className = 'project-modal__gallery';
      projectExtra.gallery.forEach(function (item) {
        var figure = document.createElement('figure');
        var galleryImage = document.createElement('img');
        var caption = document.createElement('figcaption');
        galleryImage.src = item[0];
        galleryImage.alt = item[1];
        galleryImage.loading = 'lazy';
        caption.textContent = item[1];
        figure.append(galleryImage, caption);
        gallery.append(figure);
      });
      gallerySection.append(galleryHeading, gallery);
      extra.append(gallerySection);
    }
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
