import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseUsers } from '../actions/index'
import { bindActionCreators } from 'redux'
import Navigation from '../components/navigation'
class Users extends Component {
  componentWillMount() {
    this.props.browseUsers()
  }



  render() {
    if (this.props.users.users == undefined) {
      return null;
    }

    const newUsers = this.props.users.users.map(user => {
      return (
        <div key={user.userId}>
          <ul className="collection">

          <li className="collection-item avatar">
            <i className="material-icons circle"><img src={user.avatarUrl} width="40px" height="45px"/></i>
            <span className="title">{user.name}</span>
            <p>{user.role}</p>
            <p>{user.state}</p>
          </li>
        </ul>
        </div>

      )
    })
    console.log('newUsers', newUsers)

    console.log('this.props.users', this.props.users.users)
    return (

      // <div>
      //   {/* {this.renderList()} */}
      // </div>
      <Navigation>
        <div>
          {newUsers}
        </div>
      </Navigation>

    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

// Anything returned from this func will end up as props on the Groups container
function mapDispatchToProps(dispatch) {
  // whenever browseGroup is called, result should be
  // passed to all of our reducers
  return bindActionCreators({ browseUsers }, dispatch)
}

// Promote Group from a component to container - it need to know about the new dispatch method browseGroups
// be access as a props.
export default connect(mapStateToProps, mapDispatchToProps)(Users)
