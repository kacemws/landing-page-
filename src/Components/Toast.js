import React, { useEffect, useState } from "react";
import "../Style/toast.scss";

function Toast() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);
  return (
    <div className="toast-wrapper">
      <div className={`toast error ${visible ? "active" : ""}`}>
        <h1>Erreur !</h1>
        <h3>Details de l'erreur !</h3>
      </div>
    </div>
  );
}

export default Toast;
