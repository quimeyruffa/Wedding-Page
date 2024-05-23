import React, { useEffect } from "react";

function Button({ start, end, timezone, title }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://addevent.com/libs/atc/1.6.1/atc.min.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (

        <a href="#" className="boton addeventatc" id="addeventatc1" title="" aria-haspopup="true" aria-expanded="false" tabIndex="0" translate="no" data-loaded="true" style={{ visibility: 'visible', zIndex: 6 }}>
          <span className="nameBtn atc_node notranslate">Agendar</span>
          <span className="start atc_node notranslate">{start}</span>
          <span className="end atc_node notranslate">{end}</span>
          <span className="timezone atc_node notranslate">{timezone}</span>
          <span className="title atc_node notranslate">{title}</span>
          <span id="addeventatc1-drop" className="addeventatc_dropdown" aria-hidden="true" aria-labelledby="addeventatc1">
            <span className="ateappleical" id="addeventatc1-appleical" role="menuitem" tabIndex="-1">Apple Calendar</span>
            <span className="ategoogle" id="addeventatc1-google" role="menuitem" tabIndex="-1">Google <em>(online)</em></span>
            <span className="ateoffice365" id="addeventatc1-office365" role="menuitem" tabIndex="-1">Office 365 <em>(online)</em></span>
            <span className="ateoutlook" id="addeventatc1-outlook" role="menuitem" tabIndex="-1">Outlook</span>
            <span className="ateoutlookcom" id="addeventatc1-outlookcom" role="menuitem" tabIndex="-1">Outlook.com <em>(online)</em></span>
            <span className="ateyahoo" id="addeventatc1-yahoo" role="menuitem" tabIndex="-1">Yahoo <em>(online)</em></span>
            <em className="copyx">
              <em className="brx"></em>
              <em className="frs">
                <a href="https://www.addevent.com" title="" tabIndex="-1" id="addeventatc1-home">AddEvent.com</a>
              </em>
            </em>
          </span>
        </a>
      );
}

export default Button;
