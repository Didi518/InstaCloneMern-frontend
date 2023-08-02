import { Link } from 'react-router-dom';

import image1 from '../../assets/icons/home.svg';
import image2 from '../../assets/icons/explore.svg';
import image3 from '../../assets/icons/save.svg';
import image4 from '../../assets/icons/profile.png';
import image5 from '../../assets/icons/plus.svg';

export default function Header() {
  return (
    <header style={{ height: '50px' }}>
      <div className="header_container">
        <div className="branding">
          <Link to="/accueil">
            <h1 className="brand-logo-header">Instagram</h1>
          </Link>
        </div>
        <div className="searchbar">
          <input className="search" placeholder="Recherche" type="text" />
        </div>
        <div className="iconbar">
          <Link to="/accueil">
            <img className="icon_1" src={image1} alt="accueil" />
          </Link>
          <Link to="/explorer">
            <img className="icon_1" src={image2} alt="accueil" />
          </Link>
          <Link to="/creer">
            <img className="icon_1" src={image5} alt="accueil" />
          </Link>
          <Link to="/enregistrer">
            <img className="icon_1" src={image3} alt="accueil" />
          </Link>
          <Link to="/profil">
            <img className="icon_11" src={image4} alt="accueil" />
          </Link>
          <button className="logoutbtn" type="submit">
            Déconnexion
          </button>
        </div>
      </div>
    </header>
  );
}
