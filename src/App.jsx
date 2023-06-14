import Navbar from './components/Navbar';
import LayoutPublic from './layouts/LayoutPublic';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LayoutPublic />}>
          <Route element={<Inicio />} index />
          <Route element={<Contacto />} path='/contacto' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<NotFound />} path='/*' />
        </Route>
      </Routes>
    </>
  );
};

export default App;
