import Modal from 'react-modal';
import Stories from 'react-insta-stories';

export default function ViewStory({ openStory, setOpenStory, story }) {
  const storyLine = story && story.map(({ storyPic }) => storyPic);
  console.log(storyLine);

  const storyStyles = {
    width: 'auto',
    maxWidth: '100%',
    maxHeigth: '100%',
    margin: 'auto',
  };

  return (
    <Modal
      isOpen={openStory}
      ariaHideApp={false}
      className="storyModal"
      contentLabel="Voir une Story"
    >
      <div className="col-12 profileform">
        <Stories
          loop
          stories={storyLine}
          defaultInterval={1500}
          width={432}
          height={490}
          storyStyles={storyStyles}
        />
      </div>
      <br />
      <button
        className="btn btn-primary text-center"
        onClick={() => setOpenStory(false)}
      >
        Fermer
      </button>
    </Modal>
  );
}
