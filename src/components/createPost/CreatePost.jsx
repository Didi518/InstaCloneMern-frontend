import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { createPost } from '../../app/post/PostAction';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const { isError, isPostSuccess, message } = postState;

  const postData = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'instacomern');
    data.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);
    await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: data }
    )
      .then((res) => res.json())
      .then(async (data) => {
        // console.log(data);
        let postData = { title, body, pic: data.url };
        dispatch(createPost(postData));
        if (isPostSuccess) {
          setTitle('');
          setBody('');
          setImage('');
          toast.success(message);
        }
      })
      .catch((err) => {
        if (isError) {
          toast.error(message);
        }
      });
  };

  return (
    <div className="container postcontainer">
      <div className="row postform">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block">
            <div className="login-card card-block">
              <div className="authbox">
                <div className="col-12">
                  <ToastContainer />
                  <h2 className="text-center">Nouveau Post</h2>
                  <br />
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Titre"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Description"
                      className="form-control"
                      required
                      autoComplete="off"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </div>
                  <div className="file-field input-field">
                    <input
                      type="file"
                      className="form-control"
                      required
                      autoComplete="off"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <br />
                  <div className="mt-20">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={postData}
                    >
                      Valider le Post
                    </button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
