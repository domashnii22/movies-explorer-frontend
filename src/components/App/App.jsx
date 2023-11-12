import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedHome from '../ProtectedHome/ProtectedHome';
import { useEffect, useState } from 'react';
import { registration, authorization, getUserData } from '../../utils/auth';
import CurrentUserContext from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  /// Стейты контекста
  const [currentUser, setIsCurrentUser] = useState({});
  /// Стейты регистрации и авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isResultOpenPopup, setIsResultOpenPopup] = useState(false);
  const [isDeleteMoviePopup, setIsDeleteMoviePopup] = useState(false);
  /// Стейты карточек фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  const [deleteMovieId, setDeleteMovieId] = useState('');
  const [isPreload, setIsPreload] = useState(true);

  /// Проверка токена
  useEffect(() => {
    if (localStorage.jwt) {
      getUserData(localStorage.jwt)
        .then(() => {
          setLoggedIn(true);
          setIsPreload(true);
        })
        .catch((error) => {
          console.error(`Ошибка авторизации при повторном входе ${error}`);
        })
        .finally(() => {
          setIsPreload(false);
        });
    } else {
      setLoggedIn(false);
      setIsPreload(false);
    }
  }, []);

  /// Проверка авторизации
  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        mainApi.getInfo(localStorage.jwt),
        mainApi.getSavedMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataCard]) => {
          setIsCurrentUser(dataUser);
          setSavedMovies(dataCard.data);
        })
        .catch((error) =>
          console.error(`Ошибка при создании начальных данных ${error}`)
        );
    }
  }, [loggedIn]);

  /// Функции попапов попапов
  const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
      setIsResultOpenPopup(false);
      document.removeEventListener('keydown', closePopupByEsc);
    }
  };

  const closePopup = () => {
    setIsResultOpenPopup(false);
    setIsDeleteMoviePopup(false);
    document.removeEventListener('keydown', closePopupByEsc);
  };

  function handleDeletePopupOpen(deleteMovieId) {
    setDeleteMovieId(deleteMovieId);
    setIsDeleteMoviePopup(true);
  }

  /// Функции регистрации и авторизации
  function handleRegister(name, password, email) {
    registration(name, password, email)
      .then(() => {
        setIsResultOpenPopup(true);
        setIsSuccessful(true);
        handleLogin(password, email);
      })
      .catch((error) => {
        setIsResultOpenPopup(true);
        setIsSuccessful(false);
        console.error(`Ошибка при регистрации ${error}`);
      });
  }

  function handleLogin(password, email) {
    authorization(password, email)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        setIsResultOpenPopup(true);
        setIsSuccessful(false);
        console.error(`Ошибка при авторизации ${error}`);
      });
  }

  /// Функция изменения данных пользователя
  function handleUpdateUser(dataUser) {
    mainApi
      .setUserInfo(dataUser, localStorage.jwt)
      .then((res) => {
        setIsCurrentUser(res);
        setIsResultOpenPopup(true);
        setIsSuccessful(true);
      })
      .catch((error) => {
        setIsResultOpenPopup(true);
        setIsSuccessful(false);
        console.error(`Ошибка при редактировании профиля ${error}`);
      });
  }

  /// Функция добавления фильма
  function handleAddMovie(dataUser) {
    mainApi
      .addMovie(dataUser, localStorage.jwt)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((error) => console.error(`Ошибка при добавлении фильма ${error}`));
  }

  /// Функция удаления фильма

  function handleDeleteMovie(evt) {
    evt.preventDefault();
    mainApi
      .deleteMovie(deleteMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((savedMovie) => {
            return savedMovie._id !== deleteMovieId;
          })
        );
      })
      .catch((error) => console.error(`Ошибка при удалении фильма ${error}`));
  }

  return (
    <div className='page-container'>
      {isPreload ? (
        <Preloader></Preloader>
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <Main name='main' />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path='/movies'
              element={
                <>
                  <ProtectedRoute
                    element={ProtectedHome}
                    name='movies'
                    loggedIn={loggedIn}
                    onAddMovie={handleAddMovie}
                    savedMovies={savedMovies}
                  />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path='/saved-movies'
              element={
                <>
                  <ProtectedRoute
                    element={ProtectedHome}
                    name='saved'
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeletePopupOpen}
                  />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path='/profile'
              element={
                <>
                  <ProtectedRoute
                    element={ProtectedHome}
                    name='profile'
                    onUpdateUser={handleUpdateUser}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                  />
                </>
              }
            ></Route>
            <Route
              path='/sign-in'
              element={
                <>
                  <Header name='entrance' />
                  <Main name='signin' handleLogin={handleLogin} />
                </>
              }
            ></Route>
            <Route
              path='/sign-up'
              element={
                <>
                  <Header name='entrance' />
                  <Main name='signup' handleRegister={handleRegister} />
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
          <InfoTooltip
            isSuccessful={isSuccessful}
            isOpen={isResultOpenPopup}
            onClose={closePopup}
          />
          <PopupWithForm
            isOpen={isDeleteMoviePopup}
            onClose={closePopup}
            onSubmit={handleDeleteMovie}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
