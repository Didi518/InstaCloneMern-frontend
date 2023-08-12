import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import image1 from '../../assets/icons/home.svg';
import image2 from '../../assets/icons/explore.svg';
import image3 from '../../assets/icons/save.svg';
import image4 from '../../assets/icons/profile.png';
import image5 from '../../assets/icons/plus.svg';
import { logout, searchUser } from '../../app/user/UserAction';
import { getUserFromLocalStorage } from '../../utils/utils';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const currentUser = getUserFromLocalStorage;
  const userState = useSelector((state) => state.user);
  const { userSearch, isSearchSuccess } = userState;

  const capitalizeTxt = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };

  const fetchUsers = async (query) => {
    setSearch(query);
    dispatch(searchUser(capitalizeTxt(query)));
    if (isSearchSuccess) {
      setUserDetails(userSearch);
    }
  };

  return (
    <header style={{ height: search.length > 0 ? 'auto' : '50px' }}>
      <div className="header_container">
        <div className="branding">
          <Link to="/accueil">
            <h1 className="brand-logo-header">Instagram</h1>
          </Link>
        </div>
        <div className="searchbar">
          <input
            className="search"
            placeholder="Recherche"
            type="text"
            value={search}
            onChange={(e) => fetchUsers(e.target.value)}
          />
          {search.length > 0 ? (
            <ul className="collection">
              {currentUser && userDetails.length > 0 ? (
                userDetails.map((item) => {
                  return (
                    <Link key={item._id} to={'/profil/' + item._id}>
                      <li
                        className="collection-item"
                        onClick={() => setSearch('')}
                      >
                        <img
                          src={item.pic}
                          alt={item.name}
                          width="25px"
                          height="25px"
                          style={{ borderRadius: '50%' }}
                        />
                        &nbsp;
                        {item.name}
                      </li>
                    </Link>
                  );
                })
              ) : (
                <p>Utilisateur introuvable</p>
              )}
            </ul>
          ) : null}
        </div>
        <div className="iconbar">
          <Link to="/accueil">
            <img className="icon_1" src={image1} alt="accueil" />
          </Link>
          <Link to="/explorer">
            <img className="icon_1" src={image2} alt="explorer" />
          </Link>
          <Link to="/nouveau-post">
            <img className="icon_1" src={image5} alt="créer" />
          </Link>
          <Link to="/enregistrer">
            <img className="icon_1" src={image3} alt="enregistrer" />
          </Link>
          <Link to="/profil">
            <img className="icon_11" src={image4} alt="profil" />
          </Link>
          <button
            className="logoutbtn"
            type="submit"
            onClick={() => {
              dispatch(logout());
              navigate('/');
            }}
          >
            Déconnexion
          </button>
        </div>
      </div>
    </header>
  );
}
