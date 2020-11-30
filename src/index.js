import './scss/index.scss'

console.log('Working!')

document.addEventListener('click', (e) => {
  console.dir(e.target.className);
  if (!e.target.className.includes('active')) {
    e.target.className += ' active';
  } else {
    e.target.className = e.target.className.replace('active', '')
  }
  console.dir(e.target.className);
})
