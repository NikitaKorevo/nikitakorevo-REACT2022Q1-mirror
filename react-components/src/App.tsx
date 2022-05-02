import React, { useReducer } from 'react';
import ROUTES from './constants/routes';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/MainPage/MainPage';
import PageNotFound from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/AboutUsPage/AboutUsPage';
import FormPage from './pages/FormPage/FormPage';
import { AppContext, initialState } from './store/context';
import { appReducer } from './store/reducer';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={[state, dispatch]}>
        <Header />
        <Routes>
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTES.FORM} element={<FormPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
