import React from "react";
function Footer() {
  return (
    <footer className="footer bg-warning text-center text-info">
      <div className="container-fluid">
        <div className="row justify-content-around ">
          <div className="col-4 text-center">
            <strong>Resume</strong>
          </div>
          <div className="col-4 text-center ">
            <strong>Transcript</strong>
          </div>
          <div className="col-4 text-center ">
            <strong>More Stuff</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
