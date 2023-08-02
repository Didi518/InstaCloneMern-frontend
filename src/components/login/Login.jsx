import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { login } from '../../app/auth/AuthAction';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("L'e-mail doit être valide")
    .required("L'e-mail est requis"),
  password: yup.string().required('Le mot de passe est requis'),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const { user, isError, isLoading, isLoginSuccess, message } = authState;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isLoginSuccess) {
      navigate('/accueil');
      toast.success(message);
    } else {
      navigate('/');
    }
  }, [navigate, isError, isLoading]);

  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Instagram</h1>
              <br />
              <div className="col-12">
                <form className="w-100" onSubmit={formik.handleSubmit}>
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
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
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
                      required
                      autoComplete="off"
                      value={formik.values.password}
                      onChange={formik.handleChange('password')}
                    />
                  </div>
                  <div className="mt-10 text-left d-flex">
                    <div className="forgot-password">
                      <Link
                        to="/mdp-oubli"
                        className="text-right f-w-600 text-inverse"
                      >
                        <i className="icofont icofont-lock">
                          Mot de passe oublié?
                        </i>
                      </Link>
                    </div>
                  </div>
                  <br />
                  <div className="mt-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Connexion
                    </button>
                    <br />
                    Pas encore inscrit?{' '}
                    <Link to="/inscription" className="w-400px">
                      Inscription
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
