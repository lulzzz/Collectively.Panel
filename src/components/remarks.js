import React, { Component } from 'react';
import axios from 'axios'
import Header from './header'
import { Link } from 'react-router'
class Remarks extends Component {
  constructor(props) {
    super(props)
    this.state = { remarks: [], allremarks: [] }
  }
  componentDidMount() {
        axios.get('https://api.becollective.ly/remarks/0cecd045-2f30-4b42-9f11-0a5638885c24')
        .then(response => {
        this.setState({ remarks: response.data })
  })
  axios.get('https://api-dev.becollective.ly/remarks?latest=true')
  .then(response => {
  this.setState({ allremarks: response.data })
})

}
  render() {
    if(this.state.remarks.length === 0) {
      return false;
    }
    console.log(this.state, 'this.state---->')

    return (
      <div>REMARKS</div>


    );
  }
}

export default Remarks;
