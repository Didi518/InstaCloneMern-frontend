import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from '../../app/auth/AuthAction';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("L'e-mail doit être valide")
    .required("L'e-mail est requis"),
  name: yup.string().required('Le nom est requis'),
  password: yup.string().required('Le mot de passe est requis'),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref('confirm_password')],
      'La confirmation du mot de passe ne correspond pas'
    )
    .min(6, 'La confirmation du mot de passe doit faire au moins 8 caractères')
    .required('La confirmation du mot de passe est requise'),
});

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const { isLoading, isError, isRegisterSuccess, message } = authState;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success(message);
      navigate('/');
    } else if (isError) {
      toast.error('Un problème est survenu');
    } else {
      navigate('/inscription');
    }
  }, [isError, isRegisterSuccess, message, navigate]);

  return (
    <div className="container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex loginform">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Instagram</h1>
              <h3 className="text-secondary text-center">
                Inscrivez-vous pour voir les photos et vidéos de vos amis
              </h3>
              <br />
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={formik.handleSubmit}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-name"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Nom"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={formik.values.name}
                      onChange={formik.handleChange('name')}
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
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-password"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Confirmer le Mot de Passe"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange('confirm_password')}
                    />
                  </div>
                  <div className="mt-10 text-left">
                    <div className="forgot-password">
                      Déjà inscrit?{' '}
                      <Link to="/" className="text-right f-w-600 text-inverse">
                        <i className="icofont icofont-lock">Connexion</i>
                      </Link>
                    </div>
                  </div>
                  <br />
                  <div className="mt-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                      disabled={isLoading}
                    >
                      Inscription
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
