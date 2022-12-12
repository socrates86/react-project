import React from "react";
import ReactDOM from "react-dom";
import TemporaryName from "./TemporaryName";
import Apps from "./Apps";
import "./index.css";







// React Course with BobZiroll @scrimba //

// 1st Practice: First React-1st example //
// ReactDOM.render(<h1>Hello my love, how do you do?</h1>, document.getElementById("root"));

// 2nd Practice: First React-2nd example//
// ReactDOM.render(<p>Hey, I am Morris!</p>, document.getElementById("root"));

// 3. First React Practice //
/* ReactDOM.render(
<ul><li>Thing 1</li><br /> <li>Thing 2</li></ul>, 
document.getElementById("root")); */

// 4. Why React? It's Composable //
/* function MainContent(){
  return (<h1>I'm learning React</h1>
  )
};
ReactDOM.render(
  <div>
    <navbar />
    <MainContent />
  </div>, document.getElementById("root")
); */


// 5. Why React? It' Declarative: what should be done? Just tell me what to do, and I'll worry about how I get it done. //
// Imperative (in Vanilla Javascript): how it should be done - Describe to me every step on how to do something, and I'll do it. //
/* const  h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program."
h1.className = "header"
document.getElementById("root").append(h1)
 */

// 6. JSX //
/* const page = (
  <div>
    <h1 className='header'>This is JSX.</h1>
    <p>This is a paragraph.</p>
  </div>
)
 ReactDOM.render(
  page,
  document.getElementById("root")
); */
 
// Challenge in JSX //
/* const navbar = (
  <nav>
    <h1>aimstorecosmetics.com</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
 ReactDOM.render(navbar, document.getElementById("root")); */


// 7. Drag and Drop with Netlify //


// 8. GoodBye, CDNs //


// 9. New React 18 createRoot API //
// const root = ReactDOM.createRoot(document.getElementById("root"))root.render(navbar);
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);


// 10. Thought Experiment: use.append //

 /* const myPage = (
  <div>
    <h1> My Awesome Website in React</h1>
    <h3>Reasons Why I Love React</h3>
    <ol>
      <li>It's Composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);
ReactDOM.render(myPage, document.getElementById("root")); */


// 11. Project-1 //

/* const ourPage = (
  <div>
    <img src="./logo192.png"  width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
    <li>Was first released in 2013</li> 
    <li>Was originally created by Jordan Walke</li> 
    <li>Has well over 100k stars on Github</li> 
    <li>It's maintained by Facebook</li> 
    <li>Powers thousands of enterprise apps, including mobile apps</li> 
    </ul>
  </div>
);
ReactDOM.render(ourPage, document.getElementById("root")); */



// 12. Quiz.md //

//1. Why do we need to "import React from "react" in our files?
// React is what defines JSX


//2. If I were to console.log(ourPage) in index.js, what would show up?
// A Javascript object. React elements that describe what React should eventually add to the real DOM for us


//3. What is wrong with this code?
/*  const page = (
  <h1>testing</h1>
  <p>I am testing my React app</p>
) */
// we need our JSX to be nested under a single parent element


//4. what does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do and expect it to handle the details
// Imperative means I need to tell it HOW to do each steps


// 5. What does it mean for something to be "composable"?
// we have small pieces that we can put together to make something larger/greater than the individual pieces




// 13. Custom Components 1 & 2 //


/* function TemporaryName() {
  return (
    <div>
      <header>
    <nav>
      <img src="./logo192.png"  width="40px" />
    </nav>
  </header>
      <h1>Reasons why I'm excited learning React</h1>
      <ol>
        <li>It's a popular library, so I'll be able to
           fit in with the cool kids! </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>(c) 2022 Morrison development. All rights reserved</small>
      </footer>
    </div>
  )
}
ReactDOM.render(<TemporaryName/>, document.getElementById("root")); */



// 14. Quiz.md //
//1. what is React Component? - A function that returns React Element




// 15. Parent/Child Components //


ReactDOM.render(<TemporaryName />, document.getElementById("root"));


ReactDOM.render(<Apps />, document.getElementById("root"));





// 16. Styling with Classes //



// 17. Organize Components - Creating separate files for your project in React //



// 18. Run React Locally with Vite //


// 19. Quiick Mental Outline of Project //


// 20. Project Setup //


// 21. Quick Figma Walkthrough //


// 22. Navbar and Styling //