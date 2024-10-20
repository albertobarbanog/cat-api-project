import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NavBar } from './components/NavBar'; // Importa el NavBar

export const App = () => {
  return (
    <Router>
      <NavBar />
      <ErrorBoundary>
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />{' '}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};
