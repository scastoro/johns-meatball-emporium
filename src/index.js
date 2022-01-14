import renderHomePage from "./home";
import renderAboutPage from "./about";
import renderMenuPage from "./menu";
import css from "./style.css";

// Generate the tab container and tabs with corresponding classes
const renderTabs = () => {
  const contentDiv = document.querySelector('#content');
  const tabContainer = document.createElement('div');
  tabContainer.classList.toggle('tab-container');

  const homeTab = document.createElement('div');
  homeTab.innerText = 'Home';
  homeTab.classList.toggle('home-tab');
  homeTab.classList.toggle('active');
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

// Create function to add active class to current tab
function addActiveClass(event) {
  const tabs = document.querySelectorAll('.tab-container div');

  tabs.forEach(tab => {
    if(tab.classList.contains('active')){
      tab.classList.toggle('active');
    }
  });

  event.target.classList.toggle('active');
}

// Select tabs and create event listeners
function generateEventListeners() {
  const homeTabSelector = document.querySelector('.home-tab');
  const menuTabSelector = document.querySelector('.menu-tab');
  const aboutTabSelector = document.querySelector('.about-tab');

  homeTabSelector.addEventListener('click', () =>{
    renderHomePage();
    addActiveClass(event);
  });
  menuTabSelector.addEventListener('click', () => {
    renderMenuPage();
    addActiveClass(event);
  });
  aboutTabSelector.addEventListener('click', () => {
    renderAboutPage();
    addActiveClass(event);
  } );
}

// Render tabs/homepage and add event listeners on window load
window.onload = function() {
  renderTabs();
  renderHomePage();
  generateEventListeners();
}

