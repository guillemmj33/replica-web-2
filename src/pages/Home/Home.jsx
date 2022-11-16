import React from 'react';
import Girl from '../../assets/Images/landing-page-girl.png';
import Discover from '../../components/Discover/Discover';

const Main = () => {
  return (
    <div className="container-sm">
      <main>
        <div className="cercles">
          <span className="cercle"></span>
          <span className="cercle__2"></span>
          <span className="cercle__3"></span>
        </div>
        <section className="feel">
          <div className="feel__1">
            <img src={Girl} alt="girl" />
          </div>
          <div className="feel__2">
            <h1>Feel The Music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <button type="button" class="btn btn-primary">
              <a href="#">Join Now</a>
            </button>
          </div>
        </section>
      
        <Discover />
      </main>
    </div>
  )
};

export default Main;