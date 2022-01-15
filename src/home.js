import Icon from './meatball.jpg';
import kitchen from './restaurant.jpg'

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
  paraDiv.classList.toggle('home-div');

  const kitchenImg = new Image();
  kitchenImg.src = kitchen;

  const firstPara = document.createElement('p');
  firstPara.innerText = 'Now serving the finest meatballs from all around the world!';
  paraDiv.appendChild(firstPara);

  const secondPara = document.createElement('p');
  secondPara.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore recusandae quibusdam, voluptas dolor perferendis rerum quasi dolorum molestiae! Doloremque quaerat eos vitae id excepturi magnam repellat consequuntur sequi in exercitationem.'
  paraDiv.appendChild(secondPara);

  container.appendChild(header);
  container.appendChild(paraDiv);
  container.appendChild(myIcon);
  container.appendChild(kitchenImg);
  contentDiv.appendChild(container)
}

export default renderHomePage;