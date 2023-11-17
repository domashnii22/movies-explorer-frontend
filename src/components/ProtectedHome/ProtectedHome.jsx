import Header from '../Header/Header';
import Main from '../Main/Main';

export default function ProtectedHome({
  name,
  savedMovies,
  loggedIn,
  isSend,
  ...props
}) {
  return {
    movies: (
      <>
        <Header {...props} loggedIn={!loggedIn} />
        <Main name={name} {...props} savedMovies={savedMovies} />
      </>
    ),
    saved: (
      <>
        <Header {...props} loggedIn={!loggedIn} />
        <Main name={name} {...props} savedMovies={savedMovies} />
      </>
    ),
    profile: (
      <>
        <Header {...props} loggedIn={!loggedIn} />
        <Main
          name={name}
          {...props}
          savedMovies={savedMovies}
          isSend={isSend}
        />
      </>
    ),
  }[name];
}
