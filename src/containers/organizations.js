import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseOrganizations } from '../actions/index'
import { bindActionCreators } from 'redux'

class Organizations extends Component {
  componentWillMount() {
    this.props.browseOrganizations()
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
    organizations: state.organizations
  }
}

// Anything returned from this func will end up as props on the Groups container
function mapDispatchToProps(dispatch) {
  // whenever browseGroup is called, result should be
  // passed to all of our reducers
  return bindActionCreators({ browseOrganizations }, dispatch)
}

// Promote Group from a component to container - it need to know about the new dispatch method browseGroups
// be access as a props.
export default connect(mapStateToProps, mapDispatchToProps)(Organizations)
