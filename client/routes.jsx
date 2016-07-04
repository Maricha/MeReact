import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetails from './resolutions/ResolutionDetails.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
});

FlowRouter.route('/resolution/:id', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionDetails id={params.id} />)
    })
  }
});
