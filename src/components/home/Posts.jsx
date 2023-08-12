import { useState } from 'react';
import { useDispatch } from 'react-redux';

import image2 from '../../assets/icons/comment.svg';
import image3 from '../../assets/icons/share.svg';
import image4 from '../../assets/icons/emoji.svg';
import { timeSince } from '../../utils/utils';
import {
  createComment,
  deleteComment,
  deletePost,
  dislikePost,
  likePost,
  savePost,
  unSavePost,
} from '../../app/post/PostAction';
import { Link } from 'react-router-dom';

export default function Posts({ post, currentUser }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);

  const makeComment = async (text, postId) => {
    const comment = { text, postId };
    dispatch(createComment(comment));
    setComment('');
  };

  const handleComment = () => {
    setShowComment(!showComment);
  };

  const removeComment = (record, postId) => {
    const comment = { record, postId };
    dispatch(deleteComment(comment));
  };

  return (
    <div className="post-list">
      <div className="post">
        <div className="p_d">
          <div className="p_inner">
            <img
              src={post.postedBy.pic}
              alt={post.postedBy.name}
              className="p_p"
            />
            <Link
              to={
                post.postedBy._id !== currentUser._id
                  ? '/profil/' + post.postedBy._id
                  : '/profil'
              }
            >
              <p className="p_name">{post.postedBy.name}</p>
            </Link>
          </div>
          {post.postedBy._id === currentUser._id ? (
            <i
              className="fas fa-trash"
              style={{
                float: 'right',
                paddingTop: '16px',
                fontSize: '16px',
                paddingRight: '16px',
              }}
              onClick={() => dispatch(deletePost(post._id))}
            ></i>
          ) : (
            <i className="fas fa-ellipsis-h threedots"></i>
          )}
        </div>
        <div className="p_image">
          <img src={post.photo} alt={post.title} className="pp_full" />
        </div>
        <div className="reaction_icon">
          <div className="left_i">
            {post.likes.includes(currentUser._id) ? (
              <button className="reactionbtn">
                <i
                  className="fa fa-heart hearticon"
                  style={{ fontSize: '22px', color: 'red' }}
                  onClick={() => dispatch(dislikePost(post._id))}
                ></i>
              </button>
            ) : (
              <button className="reactionbtn">
                <i
                  className="fa fa-heart hearticon"
                  style={{ fontSize: '22px' }}
                  onClick={() => dispatch(likePost(post._id))}
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
            {post.saved.length > 0 &&
            post.saved.find((save) => save.postId === post._id) ? (
              <button className="reactionbtn">
                <i
                  className="fa fa-bookmark"
                  style={{ fontSize: '22px', color: '#12129a' }}
                  onClick={() => dispatch(unSavePost(post))}
                ></i>
              </button>
            ) : (
              <button className="reactionbtn">
                <i
                  className="fa fa-bookmark"
                  style={{ fontSize: '22px', color: 'black' }}
                  onClick={() => dispatch(savePost(post))}
                ></i>
              </button>
            )}
          </div>
        </div>
        <h6 className="numlikes">
          {post.likes.length > 1
            ? post.likes.length + ' likes'
            : post.likes.length + ' like'}
        </h6>
        <span className="posttitle">{post.title}</span>&nbsp;
        <span className="postbody">{post.body}</span>
        <br />
        <button
          type="button"
          className="btn viewcommentbtn"
          onClick={handleComment}
        >
          Voir{' '}
          {post.comments.length > 1
            ? post.comments.length + ' commentaires'
            : post.comments.length + ' commentaire'}
        </button>
        <div style={{ overflowY: 'scroll', maxHeight: '85px' }}>
          {showComment && post.comments.length > 0
            ? post.comments.map((record, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h6>
                      <Link to="/" className="comment">
                        <img
                          src={record.postedBy.pic}
                          alt={record.postedBy.name}
                          className="commentview"
                        />
                        &nbsp;
                        <span style={{ fontWeight: '600', fontSize: '12px' }}>
                          {record.postedBy.name}
                        </span>
                      </Link>
                      &nbsp; {record.text}
                    </h6>
                    {record.postedBy._id === currentUser._id ? (
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          paddingTop: '6px',
                          fontSize: '16px',
                          paddingRight: '16px',
                          cursor: 'pointer',
                        }}
                        onClick={() => removeComment(record, post._id)}
                      ></i>
                    ) : null}
                  </div>
                );
              })
            : null}
        </div>
        <p className="postdate">Il y a {timeSince(new Date())}</p>
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
            <button onClick={() => makeComment(comment, post._id)}>
              Poster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
