import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import Promo from '../Promo/Promo';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Techs from '../Techs/Techs';

export default function Main({ name }) {
  return (
    <main className='content'>
      {
        {
          main: (
            <>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </>
          ),
          movies: <Movies name={name} />,
          saved: <SavedMovies name={name} />,
          profile: <Profile />,
          signup: <Register />,
          signin: <Login />,
          error: <NotFound />,
        }[name]
      }
    </main>
  );
}
