import './App.css';

// importing custom MicroFrontend component
import MicroFrontend from './MicroFrontEnd';

// getting the host urls for child apps from env file

const child1Host = process.env.REACT_APP_CHILDONE_HOST
const child2Host = process.env.REACT_APP_CHILDTWO_HOST

function App() {
  return (
    <div className="App">
      <h1>This is main container App</h1>

      {/* rendering the child apps using Microfrontend component */}
      <MicroFrontend host={child1Host} name="Child1" />;
      <MicroFrontend host={child2Host} name="Child2" />;
    </div>
  );
}

export default App;
