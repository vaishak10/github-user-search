import '../styles/App.css';
import { Header } from './Header';
import { Body } from './Body';
import { Search } from  './Search';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Body></Body>
    </div>
  );
}

export default App;
