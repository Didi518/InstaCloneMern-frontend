import axios from 'axios';
import Modal from 'react-modal';
import { config } from '../../utils/utils';

export default function ShowStoryModal({ addStoryModal, setAddStoryModal }) {
  const uploadStory = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'instacomern');
    data.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);
    await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: data }
    )
      .then((res) => res.json())
      .then(async (data) => {
        await axios.post(
          'http://localhost:8080/api/users/add_story',
          { pic: data.url },
          config
        );
        console.log('success');
        setAddStoryModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      isOpen={addStoryModal}
      ariaHideApp={false}
      className="EditModal"
      contentLabel="Créer une Story"
    >
      <div className="col-12 profileform">
        <h4>Créez une story</h4>
        <br />
        <div>
          <input type="file" onChange={(e) => uploadStory(e.target.files[0])} />
        </div>
      </div>
      <br />
      <button
        className="btn btn-primary text-center"
        onClick={() => setAddStoryModal(false)}
      >
        Fermer
      </button>
    </Modal>
  );
}
