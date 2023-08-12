import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserFromLocalStorage } from '../../utils/utils';
import './profile.css';
import { getProfile, getSavedPosts } from '../../app/profile/ProfileAction';
import ShowEditModal from '../modals/ShowEditModal';

export default function Profile() {
  const currentUser = getUserFromLocalStorage;
  const dispatch = useDispatch();
  const [postTab, setPostTab] = useState(true);
  const [saveTab, setSaveTab] = useState(false);
  const [tagTab, setTagTab] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const profileState = useSelector((state) => state.profile);

  const { profile, savedPosts } = profileState;
  console.log(profileState);

  useEffect(() => {
    async function fetchData() {
      dispatch(getProfile());
      dispatch(getSavedPosts());
    }
    fetchData();
    return () => {};
  }, [dispatch]);

  const showPostTab = () => {
    setPostTab(true);
    setSaveTab(false);
    setTagTab(false);
  };

  const showSaveTab = () => {
    setPostTab(false);
    setSaveTab(true);
    setTagTab(false);
  };

  const showTagTab = () => {
    setPostTab(false);
    setSaveTab(false);
    setTagTab(true);
  };

  return (
    <div style={{ maxWidth: '550px', margin: '0px auto', marginTop: '50px' }}>
      <div style={{ margin: '18px 0px', borderBottom: '1px solid grey' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <img
              src={currentUser && currentUser.pic}
              alt="profil"
              width="160px"
              height="160px"
              style={{ borderRadius: '80px' }}
            />
          </div>
          <div>
            <h4>{currentUser && currentUser.name}</h4>
            <h5>{currentUser && currentUser.email}</h5>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <h6 style={{ fontWeight: 500 }}>
                {profile && profile.length} Posts
              </h6>
              &nbsp;&nbsp;
              <h6 style={{ fontWeight: 500 }}>
                {currentUser && currentUser.followers.length} Abonnés
              </h6>
              &nbsp;&nbsp;
              <h6 style={{ fontWeight: 500 }}>
                {currentUser && currentUser.following.length} Abonnements
              </h6>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => setShowEditModal(true)}
            >
              Modifier le Profil
            </button>
          </div>
        </div>
        <br />
        <ul className="nav justify-content-center flex-row profileTabBtns">
          <li className="nav-item">
            <button onClick={showPostTab}>
              <i className="fa fa-th aria-hidden='true'"></i>&nbsp;POSTS
            </button>
          </li>
          <li className="nav-item">
            <button onClick={showSaveTab}>
              <i className="fa fa-bookmark"></i>&nbsp;FAVORIS
            </button>
          </li>
          <li className="nav-item">
            <button onClick={showTagTab}>
              <i className="fa fa-tag"></i>&nbsp;TAG
            </button>
          </li>
        </ul>
      </div>
      <div className="gallery">
        {postTab ? (
          profile && profile.length > 0 ? (
            profile.map((item, index) => (
              <div key={index}>
                <img src={item.photo} alt={item.title} className="item" />
              </div>
            ))
          ) : (
            <h4>Pas encore de post</h4>
          )
        ) : null}
        {saveTab ? (
          savedPosts && savedPosts.length > 0 ? (
            savedPosts.map((item, index) => (
              <div key={index}>
                <img src={item.photo} alt={item.title} className="item" />
              </div>
            ))
          ) : (
            <h4>Pas encore de post sauvegardé</h4>
          )
        ) : null}
        {tagTab ? <h5>Aucun tag pour le moment</h5> : null}
      </div>
      <ShowEditModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}
