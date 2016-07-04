import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ResolutionDetails extends TrackerReact(Component) {
  constructor() {
    super();
    this.state = {

    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolution() {
    return Resolutions.findOne({_id: this.props.id});
  }
  render() {
    let res = this.resolution();
    if(!res) {
      return(<div>Loading...</div>);
    }
    return(
      <div>
          <h1>{res.text}</h1>
      </div>
    );
  }
}
