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
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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