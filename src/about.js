const renderAboutPage = () => {
  const contentDiv = document.querySelector('#content');

  while (contentDiv.childNodes.length > 1) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  
  const container = document.createElement('div');
  container.classList.toggle('container')

  const header = document.createElement('h1');
  header.innerText = 'About Us.';

  const contactDiv = document.createElement('div');

  const numberPara = document.createElement('p');
  numberPara.innerText = 'Our Phone Number: 555-555-5555';
  contactDiv.appendChild(numberPara);

  const emailPara = document.createElement('p');
  emailPara.innerText = 'Our Email Address: veryrealemail@legitdomain.com';
  contactDiv.appendChild(emailPara);

  const addressPara = document.createElement('p');
  addressPara.innerText = 'We are located at: 123 Sunnyshore Drive Sheboygan, Wisconsin';
  contactDiv.appendChild(addressPara);

  container.appendChild(header);
  container.appendChild(contactDiv);
  contentDiv.appendChild(container)
}

export default renderAboutPage;