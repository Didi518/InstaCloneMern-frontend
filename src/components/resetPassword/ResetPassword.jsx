import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { newPassword } from '../../app/auth/AuthAction';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  const { isError, isPasswordSuccess, message } = authState;
  const tokenData = { password, token };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (password !== confirm_password)
      return toast.error('Les mots de passe ne correspondent pas');
    dispatch(newPassword(tokenData));
  };

  if (isPasswordSuccess) {
    toast.success('Mis à jour');
  } else if (isError) {
    toast.error('Erreur');
  }

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
                <form className="w-100" onSubmit={updatePassword}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-password"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Nouveau Mot de Passe"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-password"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Confirmer le Nouveau Mot de Passe"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={confirm_password}
                      onChange={(e) => setConfirm_password(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="mt-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Modifier le Mot de Passe
                    </button>
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
