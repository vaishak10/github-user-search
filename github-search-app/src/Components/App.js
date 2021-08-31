import '../styles/App.css';
import Header from './Header';
import Body from './Body';
import Search from  './Search';
import { MyProvider } from  './MyProvider';


function App() {
  return (
    <div className="container">
      <div className="box row">
        <Header></Header>
        <MyProvider>
          <Search></Search>
          <Body></Body>
        </MyProvider>
      </div>
    </div>
  );
}

export default App;
