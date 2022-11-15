import React from 'react';
import './Discover.scss';
import Covers from '../../assets/Images/covers.jpg';
import Microphone from '../../assets/Images/microphone.svg';
import Albums from '../../assets/Images/albums.svg';
import More from '../../assets/Images/more.svg';

const Discover = () => {
  return (
    <div className="container-sm">
      <div className="discover">
        <section className="discover__1">
         <h2>Discover new music</h2>
         <div className="discover__1_boxes">
          <div className="discover__1_boxes-1">
            <img src={Microphone} alt="microphone" />
            <p>Charts</p>
          </div>
          <div className="discover__1_boxes-2">
            <img src={Albums} alt="albums" />
            <p>Albums</p>
          </div>
          <div className="discover__1_boxes-3">
            <img src={More} alt="more" />
            <p>More</p>
          </div>
         </div>
         <h5>By joining you can benefit by listening to the latest albums released.</h5>
        </section>

        <section className="discover__2">
          <img src={Covers} alt="covers" />
        </section>
      </div>

    </div>
  )
};

export default Discover;