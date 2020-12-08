// 1. create 2 anchor tags

var a1 = document.createElement('a');
a1.textContent = "Home";
a1.setAttribute('class', 'col-4 nav-item nav-link active text-light font-weight-bold');

var a2 = document.createElement('a');
a2.textContent = "Categories";
a2.setAttribute('class', 'col-4 nav-item nav-link');
a2.setAttribute('style', 'color: rgb(220, 220, 245);');



// 2. creat div tag

var div1 = document.createElement('div');
div1.setAttribute('class', 'col-4 nav navbar-nav');

// 3. append 2 anchors to our div
div1.appendChild(a1);
div1.appendChild(a2);


// 4. create nav element
// var nav = document.createElement('nav')
// nav.setAttribute('class', 'row navbar navbar-expand text-light bg-primary m-3 p-3')

// 5. append div to nav element 
// nav.appendChild(div1)

// 6. find body element
// var body = document.querySelector('body')

// 7. append nav element to body 
// body.appendChild(nav)
 
var h2 = document.createElement('h2');
h2.textContent = "HighOnCoding";
h2.setAttribute('class', 'col-4');

var nav = document.createElement('nav');
nav.setAttribute('class', 'row navbar navbar-expand text-light m-3 p-3');
nav.setAttribute('style', 'background-color: rgb(99, 181, 248);')

nav.appendChild(h2);
nav.appendChild(div1);

var body = document.querySelector('body');
body.appendChild(nav);

// End of Nav

// Start Grey Box

var h3 = document.createElement('h3');
h3.textContent = "Curse of the Current Reviews";
h3.setAttribute('class', 'mb-3');

var p1 = document.createElement('p');
p1.textContent = "When you want to buy any application from the Apple itunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Thir choice is dependent on three factors price, screenshot and reviews.";

var div2 = document.createElement('div');
div2.setAttribute('class', 'row my-4 mx-5 p-3');
div2.setAttribute('style', 'background-color: rgb(223, 219, 219);');

div2.appendChild(h3)
div2.appendChild(p1)

body.appendChild(div2);

// End Grey Box

// Start First Paragraph

var h4 = document.createElement('h4');
h4.textContent = "Hello WatchKit";
h4.setAttribute('class', 'text-primary font-weight-normal');

var p2 = document.createElement('p');
p2.textContent = "Last month Apple released the anticipated WatchKit Framework dor developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for Apple Watch.";
p2.setAttribute('class', 'mb-0');

var div3 = document.createElement('div');
div3.setAttribute('class', 'row mt-4 mx-5');
div3.appendChild(h4);
div3.appendChild(p2);

body.appendChild(div3);

// End First Paragraph

// Start First Orange Bar

var div4 = document.createElement('div');
div4.textContent = "12 comments";
div4.setAttribute('class', 'col-2 p-1');

var div5 = document.createElement('div');
div5.textContent = "124 likes";
div5.setAttribute('class', 'col-2 p-1');

var div6 = document.createElement('div');
div6.setAttribute('class', 'row text-white mx-5 mt-0');
div6.setAttribute('style', 'background-color: rgb(235, 153, 2);');

div6.appendChild(div4);
div6.appendChild(div5);

body.appendChild(div6);

// End First Orange Bar

// Start Second Paragraph

var h4 = document.createElement('h4');
h4.textContent = "Indroduction to Swift";
h4.setAttribute('class', 'text-primary font-weight-normal');

var p3 = document.createElement('p');
p3.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
p3.setAttribute('class', 'mb-0');

var div7 = document.createElement('div');
div7.setAttribute('class', 'row mt-4 mx-5');

div7.appendChild(h4)
div7.appendChild(p3)

body.appendChild(div7)

// End Second Paragraph

// Start Second Orange Bar

var div8 = document.createElement('div');
div8.textContent = "15 comments";
div8.setAttribute('class', 'col-2 p-1');

var div9 = document.createElement('div');
div9.textContent = "45 likes";
div9.setAttribute('class', 'col-2 p-1');

var div10 = document.createElement('div');
div10.setAttribute('class', 'row text-white mx-5 mt-0');
div10.setAttribute('style', 'background-color: rgb(235, 153, 2);');

div10.appendChild(div8);
div10.appendChild(div9);

body.appendChild(div10)

// End Second Orange Bar

