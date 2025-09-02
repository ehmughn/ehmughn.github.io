import "../css/ComingSoon.css";
import UnderConstruction from "../Components/UnderConstruction.tsx";
import ChatBox from "../Components/ChatBox.tsx";

function ComingSoon() {
  return (
    <div className="app-container">
      <h1>Eman's Insane Portfolio</h1>
      <UnderConstruction />
      <div className="spacer" />
      <ChatBox />
    </div>
  );
}

export default ComingSoon;
