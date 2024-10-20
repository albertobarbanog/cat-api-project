import { useState, useEffect, useCallback } from 'react';

export const CatImage = () => {
  const [catImage, setCatImage] = useState(null);
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  const fetchCatImage = useCallback(() => {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: { 'x-api-key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => setCatImage(data[0].url))
      .catch((error) => console.error('Error al obtener la imagen:', error));
  }, [apiKey]);

  useEffect(() => {
    fetchCatImage();
  }, [fetchCatImage]);

  return (
    <div className='cat-container text-center'>
      {catImage ? (
        <a href={catImage} target='_blank' rel='noopener noreferrer'>
          <img
            src={catImage}
            alt='Un gato aleatorio'
            className='img-fluid cat-single-image'
          />
        </a>
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={fetchCatImage} className='btn btn-primary reload-button'>
        Recargar Gato
      </button>
    </div>
  );
};