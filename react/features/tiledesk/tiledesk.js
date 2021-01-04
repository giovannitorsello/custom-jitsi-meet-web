import { configWillLoad } from "../base/config";

window.tiledeskSettings = {
	 projectid: config.tiledesk.projectId;
   };

   (function(d, s, id) {              
    var js, fjs = d.getElementsByTagName(s)[0];    
    if (d.getElementById(id)) return;    
    js = d.createElement(s); js.id = id;   
    js.src = "https://widget.tiledesk.com/v4/launch.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'tiledesk-jssdk'));

    