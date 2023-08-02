import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { validEmail } from '../../utils/utils';
import { resetNewPassword } from '../../app/auth/AuthAction';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const { isError, isNewPasswordSuccess, message } = authState;

  const resetPassword = async (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      dispatch(resetNewPassword(email));
      if (isNewPasswordSuccess) {
        toast.success(message);
        setEmail('');
      }
    } else if (isError) {
      return toast.error('Un problème est survenu');
    } else {
      toast.error('E-mail invalide');
      return;
    }
  };

  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Instagram</h1>
              <br />
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={resetPassword}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-email"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Adresse E-mail"
                      className="form-control"
                      required
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <br />
                  <div className="mt-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Réinitialiser
                    </button>
                    <br />
                    Retour vers la connexion?{' '}
                    <Link to="/" className="w-400px">
                      Connexion
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
