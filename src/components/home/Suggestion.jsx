import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserFromLocalStorage } from '../../utils/utils';
import { getSuggestions } from '../../app/user/UserAction';

export default function Suggestion() {
  const dispatch = useDispatch();
  const currentUser = getUserFromLocalStorage;
  const userState = useSelector((state) => state.user);
  const { userSuggestion } = userState;

  useEffect(() => {
    async function fetchData() {
      dispatch(getSuggestions());
    }
    if (currentUser) {
      fetchData();
    }
  }, [currentUser, dispatch]);

  return (
    <div className="mt-10">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Link to="/profil" className="d-flex align-items-center">
            <img
              src={currentUser.pic}
              alt={currentUser.name}
              className="big-avatar"
            />
            &nbsp;
            <div className="ml-1" style={{ transform: 'translateY(-2px)' }}>
              <span className="d-block">{currentUser.name}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center my-8">
        <h6 className="text-secondary suggestbtn">Suggestions pour vous</h6>
        <i
          className="fa fa-redo"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(getSuggestions())}
        ></i>
      </div>
      <div className="suggestions"></div>
      {userSuggestion &&
        userSuggestion.map((user) => (
          <div className="d-flex justify-content-between" key={user._id}>
            <div>
              <Link
                to={`/profil/${user._id}`}
                className="d-flex align-items-center"
              >
                <img src={user.pic} alt={user.name} className="sug-avatar" />
                &nbsp;
                <div className="ml-1" style={{ transform: 'translateY(-2px)' }}>
                  <span className="d-block">{user.name}</span>
                </div>
              </Link>
            </div>
            <button style={{ margin: '10px' }} className="sug-followbtn">
              Suivre
            </button>
          </div>
        ))}
    </div>
  );
}
