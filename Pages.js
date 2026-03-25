let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.news-track');
  const cards = document.querySelectorAll('.news-card');
  const totalCards = cards.length;

  currentIndex += direction;

  if (currentIndex >= totalCards) currentIndex = 0;
  if (currentIndex < 0) currentIndex = totalCards - 1;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}