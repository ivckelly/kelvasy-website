const header = document.querySelector('.header');
const menu = header.querySelector('.menu');
const navigation = document.querySelector('#navigation');

function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
}

header.classList.add('enhanced');
menu.hidden = false;
menu.addEventListener('click', () => setMenuOpen(menu.getAttribute('aria-expanded') === 'false'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenuOpen(false);
    navigation.querySelectorAll('details[open]').forEach((item) => { item.open = false; });
  }
});
header.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const openDropdown = event.target.closest('details[open]');
  if (openDropdown) {
    openDropdown.open = false;
    openDropdown.querySelector('summary').focus();
  } else if (menu.getAttribute('aria-expanded') === 'true' && menu.getClientRects().length) {
    setMenuOpen(false);
    menu.focus();
  }
});

const marquee = document.querySelector('.marquee');
const motionToggle = document.querySelector('.motion-toggle');
marquee.classList.add('animate');
motionToggle.hidden = false;
motionToggle.addEventListener('click', () => {
  const paused = marquee.classList.toggle('paused');
  motionToggle.textContent = paused ? 'Resume brand animation' : 'Pause brand animation';
});

const announcement = document.querySelector('.announcement');
const nextAnnouncement = document.querySelector('.announcement-next');
const highlights = [
  announcement.textContent,
  'Explore managed private links and VoIP for branch offices.',
  'See how Kelvasy Console brings equipment and topology together.',
];
let highlightIndex = 0;
nextAnnouncement.hidden = false;
nextAnnouncement.addEventListener('click', () => {
  highlightIndex = (highlightIndex + 1) % highlights.length;
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = highlights[highlightIndex];
});
