import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// styled components
import { Wrap, ItemText } from './RenderDetailsStyles';

import Fade from 'react-reveal';
import Spinner from '../spinner/Spinner';

import RenderButtons from '../render-buttons/RenderButtons';

const renderDescriptionDetailsOnClick = (selectedPostFromState) => {
  return (
    <>
      <p className="likes">Likes: {selectedPostFromState.likes}</p>
      <p className="about">About: {selectedPostFromState.text}</p>
    </>
  );
};

const mainJsxRender = function ({ posts, selectedPostFromState, history }) {
  return posts.map((post) => {
    return (
      <Wrap key={post.id}>
        <Fade bottom>
          <ItemText>
            <h1>{post.owner.title}</h1>
            <p>Posted: {post.publishDate.slice(0, 10)}</p>
            <p>
              Owner: {post.owner.firstName} {post.owner.lastName}
            </p>
            <p>#{post.tags[0]}#</p>
            <div>
              {selectedPostFromState && selectedPostFromState.id === post.id
                ? renderDescriptionDetailsOnClick(selectedPostFromState)
                : null}
            </div>
          </ItemText>
        </Fade>
        <RenderButtons history={history} postId={post.id} />
        <img className="image" src={post.image} alt={post.owner.title} />
      </Wrap>
    );
  });
};

function RenderDetails(state) {
  if (!state.posts) {
    return Spinner();
  } else return mainJsxRender(state);
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.data,
});

export default withRouter(connect(mapStateToProps)(RenderDetails));
