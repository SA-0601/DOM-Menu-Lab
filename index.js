// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1.0 Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

//Task 1.1 Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Task 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
console.log(mainEl);

//Task 2.0 Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

//Task 2.1 Set the height topMenu Element to be 100%.
topMenuEl.style.height = "100%";

//Task 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Task 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Task 3.1
menuLinks.forEach((element) => {
    //Create an <a>element.
  const a = document.createElement("a");
  console.log(a);

  //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.setAttribute("href", element.href);

  //Set the new element's content to the value of the text property of the "link" object.
  a.textContent = element.text;
  
  //Append the new element to the topMenu Element.
  topMenuEl.appendChild(a);
});

//****************************LAB2 dom ********************************************


//Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

//Task 4.1 Set the height subMenu Element to be 100%.
subMenuEl.style.height = '100%';

//Task 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Task 4.3 Add the class of flex-around to the subMenu Element.
subMenuEl.classList.add('flex-around');

//Task 4.4 Set the CSS position property of subMenu Element to the value of absolute.
subMenuEl.style.position = 'absolute';

//ask 4.5 Set the CSS top property of subMenu Element to the value of 0.
subMenuEl.style.top = '0';

//Task 5.1 Select and cache all of the <a> elements inside of topMenu El in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a'); 
console.log(topMenuLinks);

//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

//Task 5.2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click',function(event){
  console.log(event);
  event.preventDefault();
  if(event.target.tagName != 'A') {
    return ;
  }
  console.log(event.target.textContent);


//Task 5.3 Next in the event listener, if the clicked <a> link has a class of active:
console.log(event.target);

if(event.target.classList.contains('active')){
  event.target.classList.remove('active');
  console.log(event.target);
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  // return;
}

//Task 5.4 Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the active class exists or not.

topMenuLinks.forEach(link => {
  link.classList.remove("active");
  console.log(link.classList);
});

//Task 5.5 Next, the event listener should add a class name of active to the <a>element that was clicked.
event.target.classList.add('active');
console.log(event.target.classList);

//Task 5.6

let clickedItemSublinks;
menuLinks.forEach(link =>{
console.log(event.target);
console.log(link);
  if(link.subLinks && event.target.textContent === link.text){
  
    showingSubMenu = true;
    console.log(showingSubMenu);
    clickedItemSublinks = link.subLinks;
    console.log(clickedItemSublinks);
    return;
  }
    // else {
    //   showingSubMenu = false;
    // }
  
})

//Task 5.7
console.log(showingSubMenu);
if (showingSubMenu){
   buildSubMenu(clickedItemSublinks);
  subMenuEl.style.top = '100%';
}else
subMenuEl.style.top = '0';

//Task 5.8
function buildSubMenu(sublink){
    subMenuEl.textContent = '';
  sublink.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href',link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });
}


//Task 6.0
subMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.tagName != 'A') {
    return ;
  }
  console.log(event.target.textContent);

//Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

//Task 6.2
topMenuLinks.forEach(link => {
  link.classList.remove("active");
  console.log(link.classList);
});

//Task 6.3
  console.log(mainEl.textContent);
  mainEl.textContent = event.target.text;

})

//Task 6.4

if(event.target.text === 'about'){
  mainEl.innerHTML = `<h1>ABOUT</h1>`;
}


})

