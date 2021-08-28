import '../styles/App.css';
import Header from './Header';
import Body from './Body';
import Search from  './Search';


function App() {
  return (
    <div className="container">
      <div className="box">
        <Header></Header>
        <Search></Search>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
