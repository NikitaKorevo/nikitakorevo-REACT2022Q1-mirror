import React, { useReducer } from 'react';
import ROUTES from './constants/routes';
import { Route, Routes } from 'react-router-dom';
/* import { AppContext, initialState } from './store/context'; */
/* import { appReducer } from './store/reducer'; */
import Header from './components/Header/Header';
import Main from './pages/MainPage/MainPage';
import DetailedCharacterCard from './components/DetailedCharacterCard/DetailedCharacterCard';
import PageNotFound from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/AboutUsPage/AboutUsPage';
import FormPage from './pages/FormPage/FormPage';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
/* import { AppContext } from './store/context'; */

function App() {
  /* const [state, dispatch] = useReducer(appReducer, initialState); */
  const store = setupStore();

  /* <AppContext.Provider value={[state, dispatch]}>
      </AppContext.Provider> */

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route
            path={`${ROUTES.DETAILED_CHARACTER_CARD}/:id`}
            element={<DetailedCharacterCard />}
          />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTES.FORM} element={<FormPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
