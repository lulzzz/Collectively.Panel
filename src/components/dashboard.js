import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import Header from './header'
import Navigation from './navigation'
import Groups from '../containers/groups'

class Dashboard extends Component {
  render() {
    return (
      <Navigation>
        <Groups />
      </Navigation>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     groups: state.groups
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ browseGroups }, dispatch);
// }
export default Dashboard
