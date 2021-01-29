import React from "react";
import exit from "../Assets/exit.svg";
import "../Style/Views/ResetPassword.scss";

function ResetPassword() {
  return (
    <div className="reset-password">
      <div className="card">
        <div className="container">
          <div className="content">
            <div className="input">
              <input type="tel" name="verification-code" />
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

export default ResetPassword;
