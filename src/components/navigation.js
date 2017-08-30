import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3">
          <div className="collection">
            <a href="#!" className="collection-item">Strona Główna</a>
            <a href="#!" className="collection-item">Zgłoszenia</a>
            <a href="#!" className="collection-item">Użytkownicy</a>
            <a href="#!" className="collection-item">Statystyki</a>
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
