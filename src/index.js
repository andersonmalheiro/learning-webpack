import _ from 'lodash';
import './assets/styles/style.css';
import WebpackIcon from './assets/images/icon.png';

import printMe from './print';

function component() {
  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.innerText = _.join(['Hello', 'webpack'], ' ');
  title.classList.add('title');

  const logo = new Image();
  logo.src = WebpackIcon;
  logo.classList.add('logo');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  container.appendChild(logo);
  container.appendChild(title);
  container.appendChild(btn);

  return container;
}

document.body.appendChild(component());
