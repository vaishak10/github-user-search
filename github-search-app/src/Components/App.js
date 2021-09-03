import '../styles/App.css';
import Header from './Header';
import Body from './Body';


function App() {
  return (
    <div className="container">
      <div className="box row">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
