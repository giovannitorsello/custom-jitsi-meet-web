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
        
        if (config.tiledesk && config.tiledesk.tiledeskSettings && config.tiledesk.tiledeskSettings.projectid) {
            console.log("Loading TiledeskComponent");
            console.log(config.tiledesk.tiledeskSettings);
            // Create a script element
            let script = document.createElement("script");
            // Set attributes
            script.setAttribute("type", "text/javascript");
            script.setAttribute("language", "javascript");
            
            // Create inline script
            var jsCode =`
                window.tiledeskSettings =  
                {
                    projectid: "`+config.tiledesk.tiledeskSettings.projectid+`",
                    marginY: "`+config.tiledesk.tiledeskSettings.marginY+`"
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
                script.id='TiledeskChatComponentScript';
                script.appendChild(inlineScript);
                //Insert only one occurnce of script
                if(!document.getElementById(script.id))
                    document.body.insertAdjacentElement('afterend', script);                
        }
        return <div id='TiledeskChatComponent'></div>;
    }
}

export default TiledeskComponent;
