import _ from 'lodash';
import './assets/styles/style.css';
import WebpackIcon from './assets/images/icon.png';

function component() {
  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.innerText = _.join(['Hello', 'webpack'], ' ');
  title.classList.add('title');

  const logo = new Image();
  logo.src = WebpackIcon;
  logo.classList.add('logo');

  container.appendChild(logo);
  container.appendChild(title);

  return container;
}

document.body.appendChild(component());
