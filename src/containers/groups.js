import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseGroups } from '../actions/index'
import { bindActionCreators } from 'redux'

class Groups extends Component {
  componentWillMount() {
    this.props.browseGroups()
  }


  render() {
    console.log(this.props)

    return (
      <div>
        {/* {this.renderList()} */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups
  }
}

// Anything returned from this func will end up as props on the Groups container
function mapDispatchToProps(dispatch) {
  // whenever browseGroup is called, result should be
  // passed to all of our reducers
  return bindActionCreators({ browseGroups }, dispatch)
}

// Promote Group from a component to container - it need to know about the new dispatch method browseGroups
// be access as a props.
export default connect(mapStateToProps, mapDispatchToProps)(Groups)
