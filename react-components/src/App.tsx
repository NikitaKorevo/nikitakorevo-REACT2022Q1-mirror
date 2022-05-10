import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './constants/routes';
import Header from './components/Header/Header';
import Main from './pages/MainPage/MainPage';
import DetailedCharacterCard from './components/DetailedCharacterCard/DetailedCharacterCard';
import PageNotFound from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/AboutUsPage/AboutUsPage';
import FormPage from './pages/FormPage/FormPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={`${ROUTES.DETAILED_CHARACTER_CARD}/:id`} element={<DetailedCharacterCard />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.FORM} element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
