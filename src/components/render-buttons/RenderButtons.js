import React from 'react';
import {
  ButtonGroup,
  LeftButton,
  RightButton,
  Buttons,
  CenterButton,
} from './RenderButtonsStyles';
import Fade from 'react-reveal';

import { toggleButton } from '../../actions/';
import { connect } from 'react-redux';

const renderDescriptionDetailsOrGoBackBtn = (
  toggleButtonState,
  history,
  id
) => {
  toggleButtonState ? history.push(`/${id}`) : history.goBack();
};

function RenderButtons({
  toggleButtonState,
  history,
  postId,
  toggleButton,
  selectedPostFromState,
}) {
  return (
    <Buttons>
      <Fade bottom>
        <ButtonGroup>
          {!toggleButtonState &&
          selectedPostFromState &&
          selectedPostFromState.id === postId ? (
            <LeftButton
              onClick={() => {
                toggleButton();
                renderDescriptionDetailsOrGoBackBtn(
                  toggleButtonState,
                  history,
                  postId
                );
              }}
            >
              back
            </LeftButton>
          ) : (
            <LeftButton
              onClick={() => {
                toggleButton();
                renderDescriptionDetailsOrGoBackBtn(
                  toggleButtonState,
                  history,
                  postId
                );
              }}
            >
              description
            </LeftButton>
          )}
          <CenterButton onClick={() => history.push(`/createpost`)}>
            crete post
          </CenterButton>
          {!toggleButtonState &&
          selectedPostFromState &&
          selectedPostFromState.id === postId ? (
            <RightButton onClick={() => history.push(`/${postId}/edit`)}>
              edit post
            </RightButton>
          ) : null}
        </ButtonGroup>
      </Fade>
    </Buttons>
  );
}

const mapStateToProps = ({ toggleButtonState, selectedPost }) => ({
  toggleButtonState: toggleButtonState.toggleButton,
  selectedPostFromState: selectedPost[0],
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: () => dispatch(toggleButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderButtons);
