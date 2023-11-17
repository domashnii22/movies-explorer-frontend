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

export default function Main({
  name,
  handleRegister,
  handleLogin,
  onUpdateUser,
  onAddMovie,
  savedMovies,
  onDeleteMovie,
  isSend,
}) {
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
          movies: (
            <Movies
              name={name}
              onAddMovie={onAddMovie}
              savedMovies={savedMovies}
            />
          ),
          saved: (
            <SavedMovies
              name={name}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
          ),
          profile: <Profile onUpdateUser={onUpdateUser} isSend={isSend} />,
          signup: <Register handleRegister={handleRegister} isSend={isSend} />,
          signin: <Login handleLogin={handleLogin} isSend={isSend} />,
          error: <NotFound />,
        }[name]
      }
    </main>
  );
}
