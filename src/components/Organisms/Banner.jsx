import React from "react";

const Banner = () => (
  <div className='main-banner img-container l-section' id='main-banner'>
    <div className='ed-grid lg-grid-6'>
      <div className='lg-cols-4 lg-x-2'>
        <img
          className='main-banner__img'
          src='https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg'
          alt='ciudad'
        />
        <div className='main-banner__data s-center'>
          <p className='t2 s-mb-0'>Cursos de EDteam</p>
          <p> Tu futuro te esta esperando</p>
          <a href='https://ed.team' className='button'>
            Suscribirse
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
