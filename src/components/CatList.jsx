import { useState, useEffect } from 'react';

export const CatList = () => {
  const [catImages, setCatImages] = useState([]);
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=6', {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setCatImages(data.map((cat) => cat.url)))
      .catch((error) => console.error('Error al obtener las imágenes:', error));
  }, [apiKey]);

  return (
    <div className='cat-list-container'>
      <div className='cat-list'>
        {catImages.length ? (
          catImages.map((image, index) => (
            <div key={index}>
              <a href={image} target='_blank' rel='noopener noreferrer'>
                <img src={image} alt='Un gato' className='img-fluid' />
              </a>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};
