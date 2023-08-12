import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserFromLocalStorage } from '../../utils/utils';
import {
  getFollowUser,
  getUnfollowUser,
  getUserDetails,
} from '../../app/user/UserAction';

export default function UserProfile() {
  const dispatch = useDispatch();
  const currentUser = getUserFromLocalStorage;
  const { userId } = useParams();
  const userProfileState = useSelector((state) => state.user);
  const [postTab, setPostTab] = useState(true);
  const [reelTab, setReelTab] = useState(false);
  const [tagTab, setTagTab] = useState(false);
  const { userProfile, isSuccess, userPosts } = userProfileState;
  const [showFollow, setShowFollow] = useState(
    currentUser && currentUser.following.includes(userId) ? false : true
  );

  useEffect(() => {
    async function fetchData() {
      dispatch(getUserDetails(userId));
    }
    fetchData();
  }, [dispatch, isSuccess, userId]);

  const followUser = async () => {
    dispatch(getFollowUser(userId));
    setShowFollow(false);
  };

  const unfollowUser = async () => {
    dispatch(getUnfollowUser(userId));
    setShowFollow(true);
  };

  const showPostTab = () => {
    setPostTab(true);
    setReelTab(false);
    setTagTab(false);
  };

  const showReelTab = () => {
    setPostTab(false);
    setReelTab(true);
    setTagTab(false);
  };

  const showTagTab = () => {
    setPostTab(false);
    setReelTab(false);
    setTagTab(true);
  };

  return (
    <>
      {userProfile.user ? (
        <div
          style={{ maxWidth: '550px', margin: '0px auto', marginTop: '50px' }}
        >
          <div style={{ margin: '18px 0px', borderBottom: '1px solid grey' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <img
                  src={userProfile.user.pic}
                  alt="profil"
                  width="160px"
                  height="160px"
                  style={{ borderRadius: '80px' }}
                />
              </div>
              <div>
                <h4>{userProfile.user.name}</h4>
                <h5>{userProfile.user.email}</h5>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <h6 style={{ fontWeight: 500 }}>
                    {userProfile.posts.length} Posts
                  </h6>
                  &nbsp;&nbsp;
                  <h6 style={{ fontWeight: 500 }}>
                    {userProfile.user.followers.length} Abonnés
                  </h6>
                  &nbsp;&nbsp;
                  <h6 style={{ fontWeight: 500 }}>
                    {userProfile.user.following.length} Abonnements
                  </h6>
                </div>
                {showFollow ? (
                  <button
                    style={{ margin: '10px' }}
                    className="btn btn-primary"
                    onClick={() => followUser()}
                  >
                    Suivre
                  </button>
                ) : (
                  <button
                    style={{ margin: '10px' }}
                    className="btn btn-primary"
                    onClick={() => unfollowUser()}
                  >
                    Ne plus Suivre
                  </button>
                )}
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
                <button onClick={showReelTab}>
                  <i className="fa fa-bookmark"></i>&nbsp;REELS
                </button>
              </li>
              <li className="nav-item">
                <button onClick={showTagTab}>
                  <i className="fa fa-tag"></i>&nbsp;TAGUES
                </button>
              </li>
            </ul>
          </div>
          <div className="gallery">
            {userPosts && userPosts.posts.length > 0 ? (
              userPosts.map((item, index) => (
                <div key={index}>
                  <img className="item" src={item.photo} alt={item.title} />
                </div>
              ))
            ) : (
              <h4>Aucun post pour le moment</h4>
            )}
          </div>
        </div>
      ) : (
        <h5>Chargement...</h5>
      )}
    </>
  );
}
