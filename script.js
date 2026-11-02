// Wrap every non-space character in its own span so it can be animated individually
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

anime.timeline({
  loop: true
})

// 1. Letters fly in from above, growing from scale 10 to 1
.add({
  targets: '.text span',
  translateY: [-600, 0],
  scale: [10, 1],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: anime.stagger(100)
})

// 2. Letters slide out to the left and fade away
.add({
  targets: '.text span',
  translateX: [0, -1000],
  opacity: [1, 0],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: anime.stagger(100)
})

// 3. Letters slide back in from the right
.add({
  targets: '.text span',
  translateX: [1000, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: anime.stagger(100)
})

// 4. Letters zoom outward and fade out
.add({
  targets: '.text span',
  scale: [1, 50],
  opacity: [1, 0],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: anime.stagger(100)
});
