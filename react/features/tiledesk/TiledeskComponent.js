/* @flow */

import React from 'react';
import { useEffect } from 'react';

/**
 * The type of the React {@code Component} props of {@link ToolbarButton}.
 */
type Props =  {
};

/**
 * Represents a button in the toolbar.
 *
 * @extends React.Component
 */
class TiledeskComponent extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    console.log("Loading TiledeskComponent");
    console.log(config.tiledesk);
    
    const script = document.createElement('script');
    
    script.src = "./tiledesk.js";
    script.async = true;
  
    document.body.appendChild(script);    
    return (
      <div id="TiledeskChat">        
      </div>
    );
  }
}

export default TiledeskComponent;