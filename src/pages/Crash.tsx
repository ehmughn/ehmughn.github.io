import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/Crash.css";

function Crash() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reason = params.get("reason");

  const [message, setMessage] = useState("");

  useEffect(() => {
    switch (reason) {
      case "easteregg":
        setMessage(
          "Triggered by the forbidden command '/explode'. You knew what you were doing 😈"
        );
        break;
      default:
        setMessage("An unexpected error occurred. Please try again later.");
        break;
    }
  }, [reason]);

  return (
    <div className="crash-container">
      <h1 className="crash-title">🚨 An error has occurred</h1>
      <p className="crash-message">Message: {message}</p>
      <button
        className="crash-button"
        onClick={() => (window.location.href = "/")}
      >
        Return to Safety
      </button>
    </div>
  );
}

export default Crash;
