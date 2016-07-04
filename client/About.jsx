import React, {Component} from 'react';


export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <div>
        <h1>About us</h1>
        <p>Chicharrones yr flannel vero. Velit mlkshk assumenda thundercats, fashion axe humblebrag chillwave mollit ea hoodie master cleanse aesthetic farm-to-table iPhone poutine. Trust fund deep v XOXO, eu sint heirloom etsy tacos. Stumptown health goth retro, laboris delectus bitters man bun. Austin pinterest labore, chambray irure YOLO cliche bushwick VHS sunt. Gastropub keytar cray, fixie proident squid gluten-free. Dolor vegan nesciunt sunt.</p>
        <button onClick={this.setVar}>Sign up</button>
    </div>
    );
  }
}
