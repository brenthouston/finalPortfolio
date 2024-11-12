import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faUser, faEnvelope, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const ResDownload = () => {

    const OnButtonClick = () => {
        fetch('BrentHouston.pdf').then(res=> {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink= document.createElement('a');
                alink.href = fileURL;
                alink.download = 'BrentHouston.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="Resume">
        <button style={{margin:"0px", padding: "9px 26px", color:"var(--accent3)", border:"1px solid #adadad", display:"flex", alignItems:"center", background:"#000"}} onClick={OnButtonClick}>Download Resume <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft:"6px"}}/> </button>
       </div>

    );
}
export default ResDownload;