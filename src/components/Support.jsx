import React from "react";
import Sidebar from './common/Sidebar';
import Header from './common/Header';

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { from: "team", text: "Hi! How can we help you today?" }
      ],
      input: "",
    };
  }

  handleSend = (e) => {
    e.preventDefault();
    if (!this.state.input.trim()) return;
    this.setState((prevState) => ({
      messages: [...prevState.messages, { from: "user", text: prevState.input }],
      input: "",
    }));
    // Simulate team reply
    setTimeout(() => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, { from: "team", text: "Thank you for reaching out! Our team will get back to you soon." }],
      }));
    }, 1200);
  };

  render() {
    return (
      <div className="min-h-screen flex bg-gradient-to-b from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
        {/* Sidebar */}
        <div className="w-[220px] min-h-screen bg-[#171717]">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <Header />
          <div className="w-full max-w-xl bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg p-8 flex flex-col" style={{ minHeight: 500 }}>
            <div className="font-bold text-2xl mb-4">Support Chat</div>
            <div className="flex-1 overflow-y-auto mb-4 space-y-2">
              {this.state.messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-4 py-2 rounded-lg max-w-[70%] ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={this.handleSend} className="flex gap-2 mt-2">
              <input
                className="flex-1 rounded-lg bg-[#191919] text-white p-3 border border-gray-600 focus:outline-none"
                placeholder="Type your message..."
                value={this.state.input}
                onChange={e => this.setState({ input: e.target.value })}
              />
              <button type="submit" className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold px-6 py-2 rounded-lg">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
