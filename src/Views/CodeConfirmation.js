import React from "react";
import "../Style/Views/CodeConfirmation.scss";
import phone from "../Assets/phone-code.webp";
import retry from "../Assets/resend.svg";

function CodeConfirmation() {
  return (
    <div className="code-confirmation">
      <div className="card">
        <div className="container">
          <div className="header">
            <img src={phone} />
          </div>
          <div className="content">
            <div className="input">
              <input type="tel" name="verification-code" />
            </div>
            <div className="re-send">
              <div className="icon">
                <img src={retry} />
              </div>
              <div className="text">Envoyer de nouveau</div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

export default CodeConfirmation;
