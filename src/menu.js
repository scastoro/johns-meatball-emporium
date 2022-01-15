import classic from './classic.jpg';
import chinese from './chinese.jpg';
import falafel from './falafel.jpg';
import swedish from './swedish.jpg';


const renderMenuPage = () => {
  const contentDiv = document.querySelector('#content');

  while (contentDiv.childNodes.length > 1) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  
  const container = document.createElement('div');
  container.classList.toggle('container')

  const menuContainer = document.createElement('div');
  menuContainer.classList.toggle('menu-container')

  const header = document.createElement('h1');
  header.innerText = 'Our Menu';

  // Classic meatball menu item
  const classicDiv = document.createElement('div');
  classicDiv.classList.toggle('menu-entry');
  const classicHeader = document.createElement('h3');
  classicHeader.innerText = 'The classic Italian meatball';
  classicDiv.appendChild(classicHeader);

  const classicPic = new Image();
  classicPic.src = classic;
  const classicImageDiv = document.createElement('div');
  classicImageDiv.classList.toggle('image-div');

  classicImageDiv.appendChild(classicPic);
  classicDiv.appendChild(classicImageDiv);

  const classicDescription = document.createElement('p');
  classicDescription.innerText = 'The timeless classic, known all around the world. This shining example of Italian cuisine is sure to bring a smile to your face.'
  classicDiv.appendChild(classicDescription);


  // Chinese meatball menu item
  const chineseDiv = document.createElement('div');
  chineseDiv.classList.toggle('menu-entry');
  const chineseHeader = document.createElement('h3');
  chineseHeader.innerText = 'Our chinese meatballs';
  chineseDiv.appendChild(chineseHeader);

  const chinesePic = new Image();
  chinesePic.src = chinese;
  const chineseImageDiv = document.createElement('div');
  chineseImageDiv.classList.toggle('image-div');

  chineseImageDiv.appendChild(chinesePic);
  chineseDiv.appendChild(chineseImageDiv);

  const chineseDescription = document.createElement('p');
  chineseDescription.innerText = 'An exciting dish from the far east. Enjoy the contrasting flavors.'
  chineseDiv.appendChild(chineseDescription);

  // Swedish meatball menu item
  const swedishDiv = document.createElement('div');
  swedishDiv.classList.toggle('menu-entry');
  const swedishHeader = document.createElement('h3');
  swedishHeader.innerText = 'Our swedish meatballs';
  swedishDiv.appendChild(swedishHeader);

  const swedishPic = new Image();
  swedishPic.src = swedish;
  const swedishImageDiv = document.createElement('div');
  swedishImageDiv.classList.toggle('image-div');

  swedishImageDiv.appendChild(swedishPic);
  swedishDiv.appendChild(swedishImageDiv);

  const swedishDescription = document.createElement('p');
  swedishDescription.innerText = 'This nordic delight will be sure to warm up any cold winter evening.'
  swedishDiv.appendChild(swedishDescription);

  // Falafel menu item
  const falafelDiv = document.createElement('div');
  falafelDiv.classList.toggle('menu-entry');
  const falafelHeader = document.createElement('h3');
  falafelHeader.innerText = 'Our falafels';
  falafelDiv.appendChild(falafelHeader);

  const falafelPic = new Image();
  falafelPic.src = falafel;
  const falafelImageDiv = document.createElement('div');
  falafelImageDiv.classList.toggle('image-div');

  falafelImageDiv.appendChild(falafelPic);
  falafelDiv.appendChild(falafelImageDiv);

  const falafelDescription = document.createElement('p');
  falafelDescription.innerText = 'Are falafels meatballs? We don\'t let such deep philosophical questions stop us from enjoying the middle eastern treat.'
  falafelDiv.appendChild(falafelDescription);

  container.appendChild(header);
  menuContainer.appendChild(classicDiv)
  menuContainer.appendChild(chineseDiv)
  menuContainer.appendChild(swedishDiv)
  menuContainer.appendChild(falafelDiv)
  container.appendChild(menuContainer);

  contentDiv.appendChild(container);

}

export default renderMenuPage;