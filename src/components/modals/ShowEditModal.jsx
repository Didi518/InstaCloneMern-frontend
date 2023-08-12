import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import { getUserFromLocalStorage } from '../../utils/utils';
import { updateUserProfile } from '../../app/profile/ProfileAction';

export default function ShowEditModal({ showEditModal, setShowEditModal }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const currentUser = getUserFromLocalStorage;

  const editProfile = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(updateUserProfile(userData));
    // setName('');
    setPassword('');
    // setEmail('');
    await setShowEditModal(false);
  };

  return (
    <Modal
      isOpen={showEditModal}
      ariaHideApp={false}
      contentLabel="Modifier le Profil"
      className="EditModal"
    >
      <div className="col-12 profileForm">
        <form className="w-100" onSubmit={editProfile}>
          <h2>Modifier le Profil</h2>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-name"></i>
            </span>
            <input
              type="text"
              placeholder="Nom"
              className="form-control"
              autoComplete="off"
              value={name ? name : currentUser && currentUser.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-email"></i>
            </span>
            <input
              type="email"
              placeholder="Adresse E-mail"
              className="form-control"
              autoComplete="off"
              value={email ? email : currentUser && currentUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-password"></i>
            </span>
            <input
              type="password"
              placeholder="Mot de Passe"
              className="form-control"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="m-t-20">
            <button
              className="btn btn-secondary btn-md btn-block m-b-10 signupbtn"
              type="submit"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setShowEditModal(false)}
      >
        Fermer
      </button>
    </Modal>
  );
}
