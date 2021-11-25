import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleButton } from '../../actions/';

// styled components
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  Buttons,
  CenterButton,
} from './RenderDetailsStyles';

import Fade from 'react-reveal';
import Spinner from '../spinner/Spinner';

const renderDescriptionDetailsOrGoBackBtn = (
  toggleButtonState,
  history,
  id
) => {
  toggleButtonState ? history.push(`/${id}`) : history.goBack();
};

const renderDescriptionDetailsOnClick = (selectedPostFromState) => {
  return (
    <>
      <p className="likes">Likes: {selectedPostFromState.likes}</p>
      <p className="about">About: {selectedPostFromState.text}</p>
    </>
  );
};

const mainJsxRender = function ({
  posts,
  selectedPostFromState,
  toggleButtonState,
  history,
  toggleButton,
}) {
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
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton
                onClick={() => {
                  toggleButton();
                  renderDescriptionDetailsOrGoBackBtn(
                    toggleButtonState,
                    history,
                    post.id
                  );
                }}
              >
                {toggleButtonState ? 'description' : 'back'}
              </LeftButton>
              <CenterButton onClick={() => history.push(`/createpost`)}>
                crete post
              </CenterButton>
              {selectedPostFromState ? (
                <RightButton onClick={() => history.push(`/${post.id}/edit`)}>
                  edit post
                </RightButton>
              ) : null}
            </ButtonGroup>
          </Fade>
        </Buttons>
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

const mapStateToProps = ({ posts, toggleButtonState }) => ({
  posts: posts.data,
  toggleButtonState: toggleButtonState.toggleButton,
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: () => dispatch(toggleButton()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RenderDetails)
);
