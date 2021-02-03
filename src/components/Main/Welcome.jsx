import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [imagesData, setImagesData] = useState([]);

  const loadImagesData = async () => {
    const resp = await fetch(`https://rhz91hml28.execute-api.us-east-2.amazonaws.com/Production/galleryImages`);
    let jsonData = await resp.json();
    console.log('JSON DATA', jsonData);
    setImagesData(jsonData);
  };
  useEffect(() => {
    loadImagesData();
  }, []);

  return (
    <div className='scene' id='welcome'>
      <article className='content'>
        <div className='gallery'>
          {imagesData.map((image) => {
            return <img className={image.className} src={image.src} alt={image.alt} />;
          })}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has
          something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great
          place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more
          about the Landon Hotel in the West End, browse our website and{' '}
          <a href='files/landon_information_sheet_London.pdf'>download our handy information sheet</a>.
        </p>
      </article>
    </div>
  );
};

export default Welcome;
