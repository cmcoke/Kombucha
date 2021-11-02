class PopularItems{

  constructor() {

    this.groupOne = document.getElementById('group1');
    this.groupTwo = document.getElementById('group2');
    this.groupThree = document.getElementById('group3');
    this.buttonOne = document.getElementById('btn1');
    this.buttonTwo = document.getElementById('btn2');
    this.buttonThree = document.getElementById('btn3');
    this.navigationNumberOne = document.querySelector('.popular-items__navigation-number-1');
    this.navigationNumberTwo = document.querySelector('.popular-items__navigation-number-2');
    this.navigationNumberThree = document.querySelector('.popular-items__navigation-number-3');

    this.events();
  }


  events() {
    this.buttonOne.addEventListener('click', () => this.showGroupOne())
    this.buttonTwo.addEventListener('click', () => this.showGroupTwo())
    this.buttonThree.addEventListener('click', () => this.showGroupThree())
  }


  showGroupOne() {
    this.groupOne.style.display = 'grid';
    this.groupTwo.style.display = 'none';
    this.groupThree.style.display = 'none';
    this.navigationNumberOne.classList.add('active', 'line-color-change');
    this.navigationNumberTwo.classList.remove('active', 'line-color-change');
    this.navigationNumberThree.classList.remove('active', 'line-color-change');

  }

  showGroupTwo() {
    this.groupOne.style.display = 'none';
    this.groupTwo.style.display = 'grid';
    this.groupThree.style.display = 'none';
    this.navigationNumberOne.classList.remove('active', 'line-color-change');
    this.navigationNumberTwo.classList.add('active', 'line-color-change');
    this.navigationNumberThree.classList.remove('active', 'line-color-change');

  
  }

  showGroupThree() {
    this.groupOne.style.display = 'none';
    this.groupTwo.style.display = 'none';
    this.groupThree.style.display = 'grid';
    this.navigationNumberOne.classList.remove('active', 'line-color-change');
    this.navigationNumberTwo.classList.remove('active', 'line-color-change');
    this.navigationNumberThree.classList.add('active', 'line-color-change');
    
  }


}


export default PopularItems
