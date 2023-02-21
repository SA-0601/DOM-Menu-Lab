// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

//Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
console.log(mainEl);

//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

//Set the height topMenu Element to be 100%.
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

menuLinks.forEach((element) => {
    //Create an <a>element.
  const a = document.createElement("a");
  console.log(a);

  //On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
  a.setAttribute("href", element.href);

  //Set the new element's content to the value of the textproperty of the "link" object.
  a.textContent = element.text;
  
  //Append the new element to the topMenuElelement.
  topMenuEl.appendChild(a);
});
