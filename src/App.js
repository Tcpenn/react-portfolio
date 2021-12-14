import React from "react";
import About from "./components/About";
import "./App.css"

function App() {
  return (
    <div className="container">
      {/*<Header></Header> will have nav component as child*/}
      <main>
        <About></About>
        {/*<Portfolio></portfolio*/}
        {/*<Contact></Contact>*/}
      </main>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
