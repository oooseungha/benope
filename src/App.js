// ------------------------ Router
import { Routes, Route } from 'react-router-dom';


// ------------------------ CSS
import './App.css';


// ------------------------ Components
import Header from './components/Header';
import Footer from './components/Footer';


// ------------------------ Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Sub from './pages/Sub';
import SubAll from './pages/SubPages/SubAll';
import SubShake from './pages/SubPages/SubShake';
import SubProtein from './pages/SubPages/SubProtein';
import SubBakery from './pages/SubPages/SubBakery';
import SubEvent from './pages/SubPages/SubEvent';
import NowEvent from './pages/SubPages/EventPages/NowEvent';
import PastEvent from './pages/SubPages/EventPages/PastEvent';
import EventContent from './pages/SubPages/EventPages/EventContent';
import SubBrandInfo from './pages/SubPages/SubBrandInfo';
import Detail from './pages/Detail';


// ------------------------ Data
import { bests, sales, mainReviews } from './data/mainData';
import { products } from './data/subData';
import { event } from './pages/SubPages/EventPages/eventData';


function App() {
  
  const allData = {
  bests: bests,
  sales: sales,
  reviews: mainReviews,
  products: products,
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/sub/*' element={<Sub />}>
          <Route path='all' element={<SubAll />} />
          <Route path='shake' element={<SubShake />} />
          <Route path='protein' element={<SubProtein />} />
          <Route path='bakery' element={<SubBakery />} />
          <Route path='event' element={<SubEvent />}>
            <Route path='now' element={<NowEvent />} />
            <Route path='past' element={<PastEvent />} />
            <Route path=':eventId' element={<EventContent eventData={event} />} />
          </Route>
          <Route path='info/*' element={<SubBrandInfo />} />
        </Route>
        <Route
          path='/details/:category/:id'
          element={
            <Detail
              allData={allData}
            />
          }
        />
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
