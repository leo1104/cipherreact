import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

//This is the parent component
function App() {
  const fname='suyash'
  return (
    <div>
      <h1>Hello</h1>
      
      {/* //Child of App.js file */}
      {/* //Class base component  */}
      {/* <FirstComponent /> */}
      {/* functional based component */}
<SecondComponent name={fname}  />
    </div>
  );
}

export default App;
