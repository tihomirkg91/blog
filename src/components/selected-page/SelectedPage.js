import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedPost } from '../../actions/';
import RenderDetails from '../render-details/RenderDetails';

class SelectedPage extends Component {
  componentDidMount() {
    this.props.selectedPost(this.props.selectedPostId);
  }

  render() {
    return (
      <div>
        <RenderDetails
          selectedPostFromState={this.props.selectedPostFromState}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedPostId: ownProps.match.params.id,
  selectedPostFromState: state.selectedPost[0],
});

export default connect(mapStateToProps, { selectedPost })(SelectedPage);
