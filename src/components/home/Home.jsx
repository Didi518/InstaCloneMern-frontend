import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from './Posts';
import Story from './Story';
import Suggestion from './Suggestion';
import { getPosts } from '../../app/post/PostAction';
import { getUserFromLocalStorage } from '../../utils/utils';

export default function Home() {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);

  const { posts } = postState;

  const currentUser = getUserFromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      dispatch(getPosts());
    }
    fetchData();
  }, [dispatch]);

  return (
    <section className="main-container">
      <div className="inner-container">
        <div className="left-section">
          <Story />
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <Posts key={index} post={post} currentUser={currentUser} />
            ))
          ) : (
            <h2>Chargement...</h2>
          )}
        </div>
        <div className="right-section">
          <Suggestion />
        </div>
      </div>
    </section>
  );
}
