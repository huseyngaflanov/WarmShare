const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;
let hideTimeout;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  clearTimeout(hideTimeout);

  const target = document.elementFromPoint(e.clientX, e.clientY);
  const isPointer = target && getComputedStyle(target).cursor === 'pointer';

  cursor.style.opacity = '1';

  if (isPointer) {
    hideTimeout = setTimeout(() => {
      cursor.style.opacity = '0';
    }, 1200);
  }
});

function animate() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;

  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';

  requestAnimationFrame(animate);
}

animate();
