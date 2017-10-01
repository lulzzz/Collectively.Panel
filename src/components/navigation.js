import React, { Component } from 'react';
import { Link } from 'react-router';


class Navigation extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3">
          <div className="collection">
            <Link className="collection-item" to="/dashboard">Strona Główna</Link>
            <Link className="collection-item" to="/remarks">Zgłoszenia</Link>
            <Link className="collection-item" to="/users">Użytkownicy</Link>
            <Link className="collection-item" to="/organizations">Organizacje</Link>
            <Link className="collection-item" to="/statics">Statystyki</Link>
          </div>
        </div>
       <div className="col s9">
        { this.props.children }
       </div>
      </div>
    )
  }
};

export default Navigation
