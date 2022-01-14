import renderHomePage from "./home";

const renderTabs = () => {
  const contentDiv = document.querySelector('#content');
  const tabContainer = document.createElement('div');
  tabContainer.classList.toggle('tab-container');

  const homeTab = document.createElement('div');
  homeTab.innerText = 'Home';
  homeTab.classList.toggle('home-tab');
  tabContainer.appendChild(homeTab);
 
  const menuTab = document.createElement('div');
  menuTab.innerText = 'Menu';
  menuTab.classList.toggle('menu-tab');
  tabContainer.appendChild(menuTab);
 
  const aboutTab = document.createElement('div');
  aboutTab.innerText = 'About';
  aboutTab.classList.toggle('about-tab');
  tabContainer.appendChild(aboutTab);

  contentDiv.appendChild(tabContainer);
}

function generateEventListeners() {
  const homeTabSelector = document.querySelector('.home-tab');
  const menuTabSelector = document.querySelector('.menu-tab');
  const aboutTabSelector = document.querySelector('.about-tab');

  homeTabSelector.addEventListener('click', renderHomePage);
  menuTabSelector.addEventListener('click', renderMenuPage);
  aboutTabSelector.addEventListener('click', renderAboutPage);
}

window.onload = function() {
  renderTabs();
  renderHomePage();
}

