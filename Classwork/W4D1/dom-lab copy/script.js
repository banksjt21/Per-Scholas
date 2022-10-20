//  DOM Menu Lab
//  https://perscholas.instructure.com/courses/1138/assignments/232771




/*  =======================================================
//  TASKS 1
=======================================================  */
//  1.0 - Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

//  1.1 - Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//        Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';

//  1.2 - Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//  1.3 - Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");




/*  =======================================================
//  TASKS 2
=======================================================  */
//  2.0 - Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector("#top-menu");

//  2.1 - Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//  2.2 - Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//  2.3 - Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");




/*  =======================================================
//  TASKS 3
=======================================================  */
//  Menu data structure
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


//  Initialize this variable to use within the for loop below
let aEl;

//  3.0 - Iterate over the entire menuLinks array and for each "link" object:
for(let count = 0; count < menuLinks.length; count++) {
    //  3.1 - Create an <a> element.
    aEl = document.createElement("a");

    //  3.2 - On the new element, add an href attribute with its value set to the href property of the "link" object.
    aEl.setAttribute("href", menuLinks[count].href);

    //  3.3 - Set the new element's content to the value of the text property of the "link" object.
    aEl.textContent = menuLinks[count].text;

    //  3.4 - Append the new element to the topMenuEl element.
    topMenuEl.append(aEl);
}




/*  =======================================================
//  TASKS 4
=======================================================  */
//  4.0 - Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");

//  4.1 - Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

//  4.2 - Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//  4.3 - Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//  4.4 - Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//  4.5 - Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";




/*  =======================================================
//  TASKS 5
=======================================================  */
//  5.1a - Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.getElementsByTagName("a");
// let topMenuLinks = topMenuEl.querySelectorAll("a");

//  5.1b - Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

//  5.2 - Attach a delegated 'click' event listener to topMenuEl.
/* */
function handleClick(evt) {
  // 5.2.1 - The first line of code of the event listener function should call the event object's preventDefault() method.
  evt.preventDefault();

  // 5.2.2 - The second line of code function should immediately return if the element clicked was not an <a> element.
  if(evt.target.tagName === "A") {
    // 5.2.3 - console.log the content of the <a> to verify the handler is working.
    console.log(evt.target.textContent);
    // console.log("a was clicked")
    // console.log(evt)
    

    // 5.3 - Next in the event listener, if the clicked <a> link has a class of active:
    // 5.3.1 - Remove the activeclass from the clicked <a> element.
    if(evt.target.classList.contains("active")) {
      // console.log("class is active")
      evt.target.classList.remove("active");

      // 5.3.2 - Set the showingSubMenuto false.
      showingSubMenu = false;

      // 5.3.3 - Set the CSS top property of subMenuElto 0.
      subMenuEl.style.top = "0";

      // 5.3.4 - return to exit the handler.
      return;
      
    } else {
      // console.log("not active")
    }

    //  5.4 - Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
    let aLinks = document.querySelectorAll("#top-menu > a");
    aLinks.forEach(function(elem) {
        elem.classList.remove("active");
        // console.log(evt)
    });
    // console.log(aLinks)


    // 5.5 - Next, the event listener should add a class name of active to the <a> element that was clicked.
    evt.target.classList.add("active");
    // console.log(evt.target)

    

    
    let linkObj = menuLinks.find(function(menuLinkObj) {
      return menuLinkObj.text === evt.target.textContent;
    });
    console.log(linkObj);

  
    // buildSubMenu function
    function buildSubMenu(linkObj) {
      subMenuEl.innerHTML = "";
      // console.log(subMenuEl);
      linkObj.subLinks.forEach(function(currentLink) {
        let link = document.createElement("a");
        link.setAttribute("href", currentLink.href);
        link.textContent = currentLink.text;
        subMenuEl.append(link);
      });
    }

    subMenuEl.addEventListener("click", function(evt2) {
      evt2.preventDefault();

      if(evt2.target.matches("a") ) {
        console.log(evt2.target)
      } else {
        return;
      }

      showingSubMenu = false;
      subMenuEl.style.top = "0";

      let aLinksAgain = document.querySelectorAll("#top-menu > a");
      aLinksAgain.forEach(function(elem) {
          elem.classList.remove("active");
      });

      mainEl.innerHTML = `<h1>${evt2.target.textContent}</h1>`;

    },{once : true});

    // 5.6 - Set showingSubMenu to true if the clicked <a> element's "link" object within menuLink shas a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
    if(evt.target.getAttribute('href') === "#") {
      showingSubMenu = true;
      buildSubMenu(linkObj);
      subMenuEl.style.top = "100%";

    } else {
      showingSubMenu = false;
      subMenuEl.style.top = "0";
    }


  } else {
    // Returns if element clicked is not an a tag
    return;
  }

  // console.log(evt)
  // Alternative way to do this with .matches()
  // if(evt.target.matches("a") ) {
  //   console.log("im an a tag")
  // } else {
  //   console.log("not an a tag")
  // }
}

topMenuEl.addEventListener('click', handleClick);


// topMenuLinks.classList.remove("active");
// console.log(topMenuLinks)

// let aLinks = document.querySelectorAll("#top-menu > a");
// console.log(aLinks)


