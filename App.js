import React from "react";
import { createRoot } from "react-dom/client";

// React elements are not html emelements untill they are not rendered
//  React.createElement  ==> react element which is a js obeject and after rednereing --> it bcms html element aftr render

const heading = React.createElement("h1", { id: "heading" }, " Hello from React! ");
console.log(heading, "zayed")

// jsx -- its not html written inside jsx its not its html,xml like syntax  jsx is not inside react its different


//jsx-->React.createElement  ==> react element which is a js obeject and after rednereing --> it bcms html element aftr render
//so at the jsx is itself an react element  but not html inside js
// babel trapiles our code so that it can be understood by the browser, its a super power package managed by parcel;
const JSXheading = () => <h1>Hello from JSX!</h1>;
console.log(JSXheading, "jsx zayed")

// i can also make these elemenets also inside my functinal components  by using {} when i add this i can write any js excpersiion inside

 const number = 1000;





// functional components are nothing bus normal fuctins returing jsx elements/ react elements

 const FunctionalComponent = () => (
  <div id="container">
    {/* this is how i can use react elements */}
    {heading}
    <h2>{number}</h2>
    {/* <h2>{100 + 2200}</h2> //even i can write expressions here */}
   <JSXheading />
    <h1> React functional component </h1>
    </div>
 )

 

// now im rendereing it hwo /
const root = createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
