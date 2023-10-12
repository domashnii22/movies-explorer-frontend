import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header name='unauth' />
              <Main name='main' />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path='/movies'
          element={
            <>
              <Header name='auth' />
              <Main name='movies' />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path='/saved-movies'
          element={
            <>
              <Header name='auth' />
              <Main name='saved' />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path='/profile'
          element={
            <>
              <Header name='auth' />
              <Main name='profile' />
            </>
          }
        ></Route>
        <Route
          path='/sign-in'
          element={
            <>
              <Header name='entrance' />
              <Main name='signin' />
            </>
          }
        ></Route>
        <Route
          path='/sign-up'
          element={
            <>
              <Header name='entrance' />
              <Main name='signup' />
            </>
          }
        ></Route>
        <Route
          path='*'
          element={
            <>
              <Main name='error' />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
