import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseOrganizations } from '../actions/index'
import { bindActionCreators } from 'redux'
import Navigation from '../components/navigation'

class Organizations extends Component {
  componentWillMount() {
    this.props.browseOrganizations()
  }


  render() {
    if (this.props.organizations.organizations == undefined) {
      return null;
    }
    const organizationList = this.props.organizations.organizations.map(organization => {
      return (
        <div key={organization.id}>
          <ul className="collection">
          <li className="collection-item avatar">
            <span className="title">{organization.name}</span>
            <p>{organization.state}</p>
            <p>{organization.createdAt.substring(0,10)}</p>
          </li>
        </ul>
        </div>
      )
    })

    console.log(organizationList, 'orgazationList>>>>>>>>>')

    return (
      <Navigation>
        <div>
          {organizationList}
        </div>
      </Navigation>
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
