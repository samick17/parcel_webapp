import React from 'react';
import Content from './Content.jsx';

class AppComponent extends React.Component {

  render() {
    return <React.Fragment>
      <div className='app_header'/>
      <div className='app_body'>
        <Content/>
      </div>
    </React.Fragment>
  }

}

export default AppComponent;
