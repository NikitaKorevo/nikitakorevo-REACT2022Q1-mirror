import React from 'react';
import ROUTES from './constants/routes';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/MainPage/MainPage';
import PageNotFound from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/AboutUsPage/AboutUsPage';
import FormPage from './pages/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.FORM} element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
