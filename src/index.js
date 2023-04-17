await new Promise((res) => {
  console.log('top level await!');
  res();
});

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  return element;
}

document.body.appendChild(component());
console.log('component() called.');
