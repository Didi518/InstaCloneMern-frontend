import { useDispatch } from 'react-redux';

import image1 from '../../assets/icons/post4.jpeg';
import image2 from '../../assets/icons/comment.svg';
import image3 from '../../assets/icons/share.svg';
import image4 from '../../assets/icons/emoji.svg';
import { timeSince } from '../../utils/utils';
import { dislikePost, likePost } from '../../app/post/PostAction';

export default function Posts({ post, currentUser }) {
  const dispatch = useDispatch();

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
            <a href="/">
              <p className="p_name">{post.postedBy.name}</p>
            </a>
          </div>
          <i className="fas fa-ellipsis-h threedots"></i>
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
            <button className="reactionbtn">
              <img src={image2} alt="button commenter" />
            </button>
            <button className="reactionbtn">
              <img src={image3} alt="bouton partager" />
            </button>
          </div>
          <div className="right_i">
            <button className="reactionbtn">
              <i className="fa fa-bookmark" style={{ fontSize: '22px' }}></i>
            </button>
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
        <button type="button" className="btn viewcommentbtn">
          Voir{' '}
          {post.comments.length > 1
            ? post.comments.length + ' commentaires'
            : post.comments.length + ' commentaire'}
        </button>
        <div style={{ overflowY: 'scroll', maxHeight: '85px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h6>
              <a href="/" className="comment">
                <img src={image1} alt="" className="commentview" />
                <span style={{ fontWeight: '400', color: 'black' }}>Jeo</span>
              </a>
              &nbsp; Nice!!
            </h6>
          </div>
        </div>
        <p className="postdate">Il y a {timeSince(new Date())}</p>
        <div className="comment_section">
          <div className="input_box">
            <img src={image4} alt="bouton émoji" />
            <input
              type="text"
              className="input_c"
              placeholder="Ajoutez un commentaire"
            />
          </div>
          <div className="c_text">
            <button>Poster</button>
          </div>
        </div>
      </div>
    </div>
  );
}
