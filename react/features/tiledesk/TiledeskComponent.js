/* @flow */

import React from "react";

/**
 * Represents a chat component.
 *
 * @extends React.Component
 */
class TiledeskComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        if (config.tiledesk && config.tiledesk.script) {
            console.log("Loading TiledeskComponent");
            // Create a script element
            let script = document.createElement("script");
            // Set attributes
            script.setAttribute("type", "text/javascript");
            script.setAttribute("language", "javascript");
            let inlineScript = document.createTextNode(config.tiledesk.script);
            script.id='TiledeskChatComponentScript';
            script.appendChild(inlineScript);
            //Insert only one occurnce of script
            if(!document.getElementById(script.id)) {
                document.body.insertAdjacentElement('afterend', script);
                console.log("TiledeskComponent loaded");
            }
        }
        return <div id='TiledeskChatComponent'></div>;
    }
}

export default TiledeskComponent;
