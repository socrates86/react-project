import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



// Session 3: Intro to React Element //

  /* const element =<h1 className = "testClass">Welcome to React Programming...</h1>;

ReactDOM.render(element,document.getElementById('root'));


const newElement = <h1 className = "testClass">Understanding the creation of ReactJs.</h1>;

ReactDOM.render(newElement,document.getElementById("root"));
 */







// React Course with BobZiroll @scrimba //


/* ReactDOM.render(<h1>Hello, People!</h1>, document.getElementById("root")); // first example //

ReactDOM.render(<p>Hi, my name is Morrison.</p>, document.getElementById("root")); */





/* function Maincontent() {
  return (<h1>I'm learning React!</h1>)
}

ReactDOM.render(
  <div>
    <Maincontent/>
  </div>,
  document.getElementById("root")
); */




// next lesson //
// Declarative = What should be done //

// Imperative = How should it be done 

const page = (
  <div>
    <h1 className="header">This is JSX.</h1>
    <p>This is a paragragh.</p>
  </div>
)
console.log(page);

ReactDOM.render(page,document.getElementById("root"));


/* const navbar = (
 
    <nav>
    <h1>aimstorecosmetics creation</h1>

    <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
    </nav>

  )
  console.log("navbar")
ReactDOM.render(navbar,document.getElementById("root"));
 */
  

// ReactDOM.createRoot(document.getElementById("root")).render(navbar) ----- Reactjs 18 method //