import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormContainer, Text, InputContainer, Input } from './FormStyles';

import {
  LeftButton,
  CenterButton,
  ButtonGroup,
} from '../../components/render-buttons/RenderButtonsStyles';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <FormContainer>
          <Text>{this.props.text}</Text>
          <InputContainer>
            <Input type="text" name="firstName" placeholder="First Name" />
            <Input type="text" name="lastName" placeholder="Last Name" />
            <Input type="text" name="email" placeholder="Email Address" />
            <Input type="text" name="image" placeholder="Image" />
            <Input type="text" name="tag" placeholder="Tag" />
          </InputContainer>
          <ButtonGroup className="button-group">
            <LeftButton
              onSubmit={this.handleSubmit}
              className="form-submit-btn"
            >
              {this.props.textButton}
            </LeftButton>
            <CenterButton
              onClick={() => this.props.history.goBack()}
              className="form-submit-btn"
            >
              back
            </CenterButton>
          </ButtonGroup>
        </FormContainer>
      </>
    );
  }
}

export default withRouter(Form);
