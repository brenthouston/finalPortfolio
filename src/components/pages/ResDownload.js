import React from "react";


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
        <button style={{margin:"0px"}} onClick={OnButtonClick}>Download Resume</button>
       </div>

    );
}
export default ResDownload;