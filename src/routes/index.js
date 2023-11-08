import NotFoundPage from '../components/pages/NotFoundPage/NotFound.jsx';
import HomePage from '../components/pages/HomePage/Home.jsx';
import AboutPage from '../components/pages/AboutPage/About.jsx';

export const routes = [
  { path: '*', page: NotFoundPage, isNotLayout: true },

  { path: '/', page: HomePage },

  { path: '/about', page: AboutPage },
];
