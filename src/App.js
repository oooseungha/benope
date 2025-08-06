// ------------------------ Router
import { Routes, Route, Link, NavLink, useParams } from 'react-router-dom';


// ------------------------ 외부 라이브러리
import styled from 'styled-components';


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
import SubPopular from './pages/SubPages/SubPopular';
import SubShake from './pages/SubPages/SubShake';
import SubProtein from './pages/SubPages/SubProtein';
import SubBakery from './pages/SubPages/SubBakery';
import SubSnack from './pages/SubPages/SubSnack';
import Detail from './pages/Detail';


// ------------------------ Data
import { bests, sales, mainReviews } from './data/mainData'
import { products } from './data/subData';


function App() {
  const { id, category } = useParams();
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
          <Route path='all' element={<SubAll />}></Route>
          <Route path='popular' element={<SubPopular />}></Route>
          <Route path='shake' element={<SubShake />}></Route>
          <Route path='protein' element={<SubProtein />}></Route>
          <Route path='bakery' element={<SubBakery />}></Route>
          <Route path='snack' element={<SubSnack />}></Route>
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
