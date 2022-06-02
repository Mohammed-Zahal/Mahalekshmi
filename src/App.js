import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Poster from './components/Posters/Poster';
import SecondBanner from './components/SecondBanner/SecondBanner';


function App() {
  return (
    <div className="App">
<Header/>
<Banner/>
<Poster/>
<SecondBanner/>
    </div>
  );
}

export default App;
