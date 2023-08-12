import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getExplorePosts } from '../../app/explore/ExploreAction';
import ShowPostModal from '../modals/ShowPostModal';

export default function Explore() {
  const dispatch = useDispatch();
  const [postModal, setPostModal] = useState(false);
  const [currentPost, setCurrentPost] = useState();
  const [showComment, setShowComment] = useState(false);
  const exploreState = useSelector((state) => state.explore);
  const { explorePosts, isSuccess } = exploreState;

  useEffect(() => {
    async function fetchData() {
      dispatch(getExplorePosts());
    }
    fetchData();
  }, [dispatch]);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  return (
    <>
      <div className="container-fluid" style={{ marginTop: '30px' }}>
        <div className="row align-items-center">
          {isSuccess && explorePosts.length > 0 ? (
            explorePosts.map((posts, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <img
                    className="postedImg"
                    src={posts.photo}
                    alt={posts.title}
                  />
                  <div className="text">
                    <i
                      className="fa fa-heart"
                      style={{ fontSize: '16px', color: 'white' }}
                      onClick={() => {
                        setPostModal(true);
                        setCurrentPost(posts);
                      }}
                    ></i>
                    &nbsp;
                    <span className="titlespan">{posts.likes.length}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                      className="fa fa-comment"
                      style={{ fontSize: '16px', color: 'white' }}
                      onClick={() => {
                        setPostModal(true);
                        setCurrentPost(posts);
                      }}
                    ></i>
                    &nbsp;
                    <span className="titlespan">{posts.comments.length}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Aucun post enregistré pour le moment</h3>
          )}
        </div>
      </div>
      <ShowPostModal
        postModal={postModal}
        setPostModal={setPostModal}
        currentPost={currentPost}
        handleComment={handleShowComment}
      />
    </>
  );
}
