import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { getUserFromLocalStorage, timeSince } from '../../utils/utils';
import image2 from '../../assets/icons/comment.svg';
import image3 from '../../assets/icons/share.svg';
import image4 from '../../assets/icons/emoji.svg';
import {
  createComment,
  dislikePost,
  likePost,
  savePost,
  unSavePost,
} from '../../app/post/PostAction';

export default function ShowPostModal({
  postModal,
  setPostModal,
  currentPost,
  handleComment,
}) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const state = getUserFromLocalStorage;

  //   const handleComment = () => {};

  const makeComment = (text, postId) => {
    const comment = { text, postId };
    dispatch(createComment(comment));
  };

  return (
    <Modal
      isOpen={postModal}
      ariaHideApp={false}
      className="showPostModal"
      contentLabel="Voir le Post"
    >
      <div className="col-12 profileform">
        <button className="btn text-center" onClick={() => setPostModal(false)}>
          <i className="fa fa-times" style={{ fontSize: '20px' }}></i>
        </button>
        <div className="row">
          <div className="col-md-4" style={{ overflow: 'hidden' }}>
            <img
              src={currentPost && currentPost.photo}
              alt={currentPost && currentPost.title}
              className="modalpostedimg"
            />
          </div>
          <div className="col-md-8">
            <div className="post-list-modal">
              <div className="post-modal">
                <div className="p_d_modal">
                  <div className="p_inner">
                    <img
                      src={currentPost && currentPost.postedBy.pic}
                      alt={currentPost && currentPost.postedBy.name}
                      className="p_p"
                    />
                    <Link>
                      <p className="p_name">
                        {currentPost && currentPost.postedBy.name}
                      </p>
                    </Link>
                  </div>
                  <i className="fa fa-ellipsis-h threedots"></i>
                </div>
                <div
                  className="p_image_modal"
                  style={{
                    overflow: 'scroll',
                    maxHeight: '341px',
                    paddingTop: '10px',
                  }}
                >
                  {currentPost && currentPost.comments.length > 0 ? (
                    currentPost.comments.map((record, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h6>
                            <Link style={{ paddingLeft: '10px' }}>
                              <img
                                src={record.postedBy.pic}
                                alt={record.postedBy.name}
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  borderRadius: '50%',
                                }}
                              />
                              <span style={{ fontWeight: 600 }}>
                                {record.postedBy.name}
                              </span>
                            </Link>
                            &nbsp;
                            {record.text} &nbsp;
                          </h6>
                          {record.postedBy._id === state._id ? (
                            <i className="fa fa-times"></i>
                          ) : null}
                        </div>
                      );
                    })
                  ) : (
                    <h2>Aucun commentaire</h2>
                  )}
                </div>
                <div className="reaction_icon">
                  <div className="left_i">
                    {currentPost && currentPost.likes.includes(state._id) ? (
                      <button className="reactionbtn">
                        <i
                          className="fa fa-heart hearticon"
                          style={{ fontSize: '22px', color: 'red' }}
                          onClick={() => dispatch(dislikePost(currentPost._id))}
                        ></i>
                      </button>
                    ) : (
                      <button className="reactionbtn">
                        <i
                          className="fa fa-heart hearticon"
                          style={{ fontSize: '22px' }}
                          onClick={() => dispatch(likePost(currentPost._id))}
                        ></i>
                      </button>
                    )}
                    <button className="reactionbtn" onClick={handleComment}>
                      <img src={image2} alt="button commenter" />
                    </button>
                    <button className="reactionbtn">
                      <img src={image3} alt="bouton partager" />
                    </button>
                  </div>
                  <div className="right_i">
                    {currentPost &&
                    currentPost.saved.length > 0 &&
                    currentPost.saved.find(
                      (save) => save.postId === currentPost._id
                    ) ? (
                      <button className="reactionbtn">
                        <i
                          className="fa fa-bookmark"
                          style={{ fontSize: '22px', color: '#12129a' }}
                          onClick={() => dispatch(unSavePost(currentPost))}
                        ></i>
                      </button>
                    ) : (
                      <button className="reactionbtn">
                        <i
                          className="fa fa-bookmark"
                          style={{ fontSize: '22px', color: 'black' }}
                          onClick={() => dispatch(savePost(currentPost))}
                        ></i>
                      </button>
                    )}
                  </div>
                </div>
                <h6
                  style={{
                    fontWeight: 600,
                    paddingLeft: '12px',
                    paddingTop: '10px',
                  }}
                >
                  {currentPost && currentPost.likes.length} likes
                </h6>
                <span
                  style={{
                    fontWeight: 600,
                    paddingLeft: '12px',
                  }}
                >
                  {currentPost && currentPost.title}
                </span>
                <span
                  style={{
                    display: 'inline',
                    color: 'black',
                    fontSize: '14px',
                  }}
                >
                  {currentPost && currentPost.body}
                </span>
                <br />
                <p
                  style={{
                    color: 'grey',
                    paddingLeft: '12px',
                    fontSize: '10px',
                  }}
                >
                  Il y a{' '}
                  {timeSince(new Date(currentPost && currentPost.createdAt))}
                </p>
                <div className="comment_section">
                  <div className="input_box">
                    <img src={image4} alt="bouton émoji" />
                    <input
                      type="text"
                      className="input_c"
                      placeholder="Ajoutez un commentaire..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  <div className="c_text">
                    <button
                      onClick={() =>
                        makeComment(comment, currentPost && currentPost._id)
                      }
                    >
                      Poster
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
