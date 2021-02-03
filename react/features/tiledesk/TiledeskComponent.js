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
        console.log("Loading TiledeskComponent");
        console.log(config.tiledesk);
        if (config.tiledesk && config.tiledesk.projectId) {
            // Create a script element
            let script = document.createElement("script");
            // Set attributes
            script.setAttribute("type", "text/javascript");
            script.setAttribute("language", "javascript");
            // Create inline script
            var jsCode =
                `
          window.tiledeskSettings =  
          {
            projectid: "` +
                config.tiledesk.projectId +
                `"
          };
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://widget.tiledesk.com/v4/launch.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'tiledesk-jssdk'));
    `;
            let inlineScript = document.createTextNode(jsCode);
            script.appendChild(inlineScript);
            let chat_div = document.getElementById("TiledeskChatComponent");
            console.log(script);
            //chat_div.insertAdjacentElement('afterend', script);
            document.body.appendChild(script);
        }
        return <div id="TiledeskChatComponent"></div>;
    }
}

export default TiledeskComponent;
