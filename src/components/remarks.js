import React, { Component } from 'react';
import axios from 'axios'
import Header from './header'
import { Link } from 'react-router'
class Remarks extends Component {
  constructor(props) {
    super(props)
    this.state = { remarks: [] }
  }
  componentDidMount() {
        axios.get('https://api.becollective.ly/remarks/0cecd045-2f30-4b42-9f11-0a5638885c24')
        .then(response => {
        this.setState({ remarks: response.data })
  })
}
  render() {
    if(this.state.remarks.length === 0) {
      return false;
    }
    console.log(this.state.remarks,'this.state z rendera')
    return (
      <div id="wrapper">
      <nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
          <div className="navbar-header">
              <button className="navbar-toggler hidden-sm-up pull-sm-right" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              </button>
          </div>
          <ul className="nav navbar-nav top-nav navbar-right pull-xs-right">
              <li className="dropdown nav-item">
                    <Link className="nav-link" to="/signout"><i className="fa fa-user"></i> Sign Out</Link>
              </li>
          </ul>
          <div className="collapse navbar-collapse navbar-toggleable-sm navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav list-group">
                  <li className="list-group-item">
                    <Link className="nav-link" to="/dashboard"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/remarks"><i className="fa fa-fw fa-bar-chart-o"></i> Remarks</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/users"><i className="fa fa-fw fa-table"></i> Users</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/stats"><i className="fa fa-fw fa-edit"></i> Statistics</Link>
                  </li>

              </ul>
          </div>
      </nav>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Remarks</h3>
              </div>
              <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                  <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Description</th>
              <th>State</th>
              <th>Created At</th>
              <th>Delete Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.remarks.id}</td>
              <td>{this.state.remarks.location.address}</td>
              <td>{this.state.remarks.group.name}</td>
              <td>{this.state.remarks.state.state}</td>
              <td>{this.state.remarks.createdAt}</td>
              <td><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
            </tr>
            
            <tr>
              <td>{this.state.remarks.id}</td>
              <td>{this.state.remarks.location.address}</td>
              <td>{this.state.remarks.group.name}</td>
              <td>{this.state.remarks.state.state}</td>
              <td>{this.state.remarks.createdAt}</td>
              <td><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
</div>
</section>
</div>


    );
  }
}

export default Remarks;
