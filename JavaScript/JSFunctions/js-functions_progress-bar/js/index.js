console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const yPosition = window.scrollY;
  const height = window.innerHeight;
  const totalHeight = document.body.clientHeight;

  return (yPosition / (totalHeight - height)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPercentage = calculateScrollPercentage();
  progressBar.style.width = `${scrollPercentage}%`;
});
