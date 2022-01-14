import Icon from './meatball.jpg';

const renderHomePage = () => {
  const contentDiv = document.querySelector('#content');

  while (contentDiv.childNodes.length > 1) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  
  const container = document.createElement('div');
  container.classList.toggle('container')

  const header = document.createElement('h1');
  header.innerText = 'Welcome to Johns Meatball Emporium!';

  const myIcon = new Image();
  myIcon.src = Icon;

  const paraDiv = document.createElement('div');

  const firstPara = document.createElement('p');
  firstPara.innerText = 'Now serving the finest meatballs from all around the world!';
  paraDiv.appendChild(firstPara);

  container.appendChild(header);
  container.appendChild(paraDiv);
  container.appendChild(myIcon);
  contentDiv.appendChild(container)
}

export default renderHomePage;