import {CatImage} from '../components/CatImage';
import {CatList} from '../components/CatList';

export const HomePage = () => {
  return (
    <div className='homepage-container'>
      <h1 className='text-center mb-5'>Galería de Gatos</h1>

      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <CatImage />
        </div>
      </div>

      <h2 className='text-center mt-5 mb-4'>Más Gatos</h2>
      <CatList />
    </div>
  );
};

