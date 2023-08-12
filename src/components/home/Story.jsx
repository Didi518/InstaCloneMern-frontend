import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ShowStoryModal from '../modals/ShowStoryModal';
import { config } from '../../utils/utils';
import ViewStory from '../modals/ViewStory';

export default function Story() {
  const [addStoryModal, setAddStoryModal] = useState(false);
  const [openStory, setOpenStory] = useState(false);
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState();

  useEffect(() => {
    async function fetchData() {
      const allStories = await axios.get(
        'http://localhost:8080/api/users/get_story',
        config
      );
      setStories(allStories.data.userStories);
      console.log(allStories);
    }
    fetchData();
  }, []);

  return (
    <div className="story">
      <div className="story-box">
        {stories.length > 0
          ? stories &&
            stories.map((story, index) => (
              <React.Fragment key={index}>
                <div className="story_1">
                  <button
                    className="storybtn"
                    onClick={() => {
                      setOpenStory(true);
                      setCurrentStory(story.stories);
                    }}
                  >
                    <img className="story_image" src={story.pic} alt="" />
                    <p className="story_H">Loyd</p>
                  </button>
                </div>
              </React.Fragment>
            ))
          : null}
        {console.log(stories)}
        <div
          className="story_1"
          style={{ marginTop: '-15px', padding: '10px' }}
        >
          <button className="storybtn" onClick={() => setAddStoryModal(true)}>
            <i className="fa fa-plus-circle story_image"></i>
            <i className="story_S" style={{ display: 'flex' }}>
              Ajouter Story
            </i>
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
      <ShowStoryModal
        addStoryModal={addStoryModal}
        setAddStoryModal={setAddStoryModal}
      />
      <ViewStory
        openStory={openStory}
        setOpenStory={setOpenStory}
        story={currentStory}
      />
    </div>
  );
}
