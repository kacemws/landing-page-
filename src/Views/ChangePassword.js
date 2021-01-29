import React from "react";
import exit from "../Assets/exit.svg";
import "../Style/Views/ChangePassword.scss";

function ChangePassword() {
  return (
    <div className="change-password">
      <div className="card">
        <div className="container">
          <div className="content">
            <h3>Changer votre mot de passe !</h3>
            <div className="input">
              <input
                type="password"
                name="password-field"
                placeholder="My awesome passw0rd !"
              />
              <input
                type="password"
                name="confirm-password-field"
                placeholder="My awesome passw0rd !"
              />
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

export default ChangePassword;
