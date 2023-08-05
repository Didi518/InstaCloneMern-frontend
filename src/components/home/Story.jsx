import React from 'react';

export default function Story() {
  return (
    <div className="story">
      <div className="story-box">
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/QpUEcfi.jpg"
              alt=""
            />
            <p className="story_H">Loyd</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/LBRXhIq.jpg"
              alt=""
            />
            <p className="story_H">Pinky</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/ARMxyC4.jpg"
              alt=""
            />
            <p className="story_H">Jason</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/QpUEcfi.jpg"
              alt=""
            />
            <p className="story_H">Loyd</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/LBRXhIq.jpg"
              alt=""
            />
            <p className="story_H">Pinky</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <img
              className="story_image"
              src="https://i.imgur.com/ARMxyC4.jpg"
              alt=""
            />
            <p className="story_H">Jason</p>
          </button>
        </div>
        <div className="story_1">
          <button className="storybtn">
            <i className="fa fa-plus-circle story_image"></i>
            <i className="story_S">Story</i>
          </button>
        </div>
      </div>
      <i
        className="fas fa-chevron-circle-left icon-style2 nav-left"
        style={{ fontSize: '24px' }}
      ></i>
      <i
        className="fas fa-chevron-circle-right icon-style1 nav-right"
        style={{ fontSize: '24px' }}
      ></i>
    </div>
  );
}
