import React, { useState } from "react";
import "../css/ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState<string[]>([
    "System > type '/help' for guide.",
  ]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("You");

  const handleCommand = (text: string): void => {
    const [command, ...args] = text.trim().split(" ");
    const cmd = command.toLowerCase();

    switch (cmd) {
      case "/name":
        if (args.length > 0) {
          const newName = args.join(" ");
          setName(newName);
          setMessages((prev) => [
            `System > Name changed to "${newName}"`,
            ...prev,
          ]);
        } else {
          setMessages((prev) => [`System > Usage: /name [your name]`, ...prev]);
        }
        break;

      case "/clear":
        setMessages([]);
        break;

      case "/help":
        setMessages((prev) => [
          `System > Available commands:\n/name [new name]\n/clear\n/help\n/hi\n/hello\n/about\n/favorite\n/stack\n/portfolio\n/links\n/fuckyou\n`,
          ...prev,
        ]);
        break;

      case "/hi":
      case "/hello":
        setMessages((prev) => [`System > Hey there! 👋`, ...prev]);
        break;

      case "/about":
        setMessages((prev) => [
          `System > I'm Emmanuel T. Bawalan, you can call me love👀 or Eman if you don't want to😔. Currently a BSIT student from NU Dasmarinas. I love development in general😍, just the idea of creating something is... something🤧`,
          ...prev,
        ]);
        break;

      case "/favorite":
        setMessages((prev) => [
          `System > Programming 💻, Chocolates 🍫, Playing Games 🎮`,
          ...prev,
        ]);
        break;

      case "/stack":
        setMessages((prev) => [
          `System > Python 🐍, HTML, CSS, JS, TS, C, C++, PHP, Lua, React ⚛️`,
          ...prev,
        ]);
        break;

      case "/portfolio":
        setMessages((prev) => [
          `System > Built with React + TypeScript 💼✨`,
          ...prev,
        ]);
        break;

      case "/links":
        setMessages((prev) => [
          `System > 🔗 Facebook: https://facebook.com/ehmughn\n🔗 GitHub: https://github.com/ehmughn`,
          ...prev,
        ]);
        break;

      case "/fuckyou":
        setMessages((prev) => [`System > Fuck you too 😠🖕`, ...prev]);
        break;

      default:
        if (cmd.startsWith("/")) {
          setMessages((prev) => [
            `Error > Unknown Command "${cmd.substring(1)}"`,
            ...prev,
          ]);
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [`${name} > ${trimmed}`, ...prev]);
    handleCommand(trimmed);

    setInput("");
  };

  return (
    <div className="app-container">
      <div className={`chat-log ${messages.length >= 3 ? "chat-fade" : ""}`}>
        {messages.map((msg, index) => {
          const [sender, content] = msg.split(" > ");
          const senderClass =
            sender === "System"
              ? "system-name"
              : sender === "Error"
              ? "error-name"
              : "user-name";

          return (
            <div key={index} className="chat-message">
              <span className={senderClass}>{sender}</span>
              <span className="chat-separator"> &gt; </span>
              <span className="chat-content">{content}</span>
            </div>
          );
        })}
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message or command..."
        />
      </form>
    </div>
  );
}

export default ChatBox;
