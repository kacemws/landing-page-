import React from "react";
import "../Style/Views/CodeConfirmation.scss";
import phone from "../Assets/phone-code.webp";
import retry from "../Assets/resend.svg";
import exit from "../Assets/exit.svg";

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
            <div className="button">
              <div className="icon">
                <img src={retry} />
              </div>
              <div className="text">Renvoyer</div>
            </div>
          </div>
          <div className="footer">
            <div className="cancel-wrapper">
              <div className="button">
                <div className="icon">
                  <img src={exit} />
                </div>
                <div className="text">Quitter</div>
              </div>
            </div>
            <div className="button primary">
              <div className="text">Valider</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeConfirmation;
