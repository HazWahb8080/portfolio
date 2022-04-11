import React from 'react';
import Header from './../Header/Header';
import WorksSection from './../Works/WorksSection';

function HomePage() {
  return (
    <div data-scroll-section className="homepage">
      {/* Hero */}
      <div data-scroll  className="home-container">
        <div   className='hometext-container'>
        <h1 className=' text-[#141414] text-5xl xl:text-8xl font-Marc'>
          I am Hazem W. a 22 Junior Passionate Front-end Developer Based in Egypt.
        </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage;