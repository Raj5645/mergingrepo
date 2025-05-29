// import React, { useState } from 'react';
// import Sidebar from '../common/Sidebar';
// import Header from '../common/header2';
// import TextareaAutosize from 'react-textarea-autosize';

// const QueryContent = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: 'Support', text: 'Hello, how may I help you?', isUser: false },
//     {
//       id: 2,
//       sender: 'You',
//       text: "I'm trying to create early bird tickets, but the app keeps sending me in circles. It won't let me set different prices.",
//       isUser: true,
//     },
//     {
//       id: 3,
//       sender: 'Support',
//       text: "Ah! The treacherous loop of endless clicking. Fear not! First, let us locate the 'Add Tier' button. It hides sometimes, like a shy moonbeam.",
//       isUser: false,
//     },
//   ]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => setInputText(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputText.trim() === '') return;
//     setMessages([
//       ...messages,
//       {
//         id: messages.length + 1,
//         sender: 'You',
//         text: inputText,
//         isUser: true,
//       },
//     ]);
//     setInputText('');
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col pt-[90px] items-center justify-start bg-black py-10 px-2">
//       <Sidebar />
//       <div className="w-full max-w-3xl rounded-2xl bg-[#1C1C1C] shadow-lg p-0">
//         {/* Header */}
//         <Header />
//         <div className="px-8 pt-8 pb-4">
//           <div className="text-2xl font-bold font-['Inter','Poppins',sans-serif] text-white">
//             Query
//           </div>
//         </div>
//         {/* Chat Area */}
//         <div className="flex flex-col gap-7 px-8 pb-8 pt-2">
//           {messages.map(({ id, sender, text, isUser }) => (
//             <div key={id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
//               {/* Icon and name */}
//               <div className="flex items-center mb-0.5">
//                 {!isUser && (
//                   <>
//                     <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#23272f] mr-2">
//                       <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
//                         <circle cx="12" cy="12" r="10" fill="#fff" opacity="0.2" />
//                         <text
//                           x="12"
//                           y="17"
//                           textAnchor="middle"
//                           fill="#fff"
//                           fontSize="12"
//                           fontFamily="Arial"
//                           dy="0"
//                         >
//                           S
//                         </text>
//                       </svg>{' '}
//                     </span>
//                     <span className="font-semibold text-sm text-white">Support</span>
//                   </>
//                 )}
//                 {isUser && (
//                   <>
//                     <span className="font-semibold text-sm text-white mr-2">You</span>
//                     <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#23272f]">
//                       <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
//                         <circle cx="12" cy="8" r="4" fill="#fff" opacity="0.7" />
//                         <rect x="6" y="14" width="12" height="6" rx="3" fill="#fff" opacity="0.7" />
//                       </svg>
//                     </span>
//                   </>
//                 )}
//               </div>
//               {/* Bubble */}
//               <div
//                 className={`rounded-xl px-5 py-3 mt-0 text-base max-w-[80%] text-white ${
//                   isUser ? 'bg-[#3479FF] text-right' : 'bg-[#9C9C9C]'
//                 }`}
//               >
//                 {text}
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Input */}
//         <form className="w-full px-8 pb-8" onSubmit={handleSubmit}>
//           <div className="flex items-center bg-[#232323] rounded-xl px-4 py-3 mt-2">

//             <TextareaAutosize
//               minRows={1}
//               maxRows={6}
//               value={inputText}
//               onChange={handleInputChange}
//               placeholder="Send a message..."
//               className="flex-1 resize-none bg-transparent outline-none border-none text-white placeholder-gray-300 text-base pr-3"
//               style={{
//                 boxShadow: 'none',
//                 width: '100%',
//                 background: 'transparent',
//                 padding: 0,
//                 margin: 0,
//                 lineHeight: '1.5',
//               }}
//             />

//             <button
//               type="submit"
//               className="ml-2 w-8 h-8 flex items-center justify-center rounded bg-transparent text-gray-400 hover:text-white transition p-0"
//               style={{ minWidth: '2rem', minHeight: '2rem' }}
//             >
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                 <polygon points="4,18 18,10 4,2 4,8 14,10 4,12" />
//               </svg>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QueryContent;




import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/header2';
import TextareaAutosize from 'react-textarea-autosize';

const QueryContent = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support', text: 'Hello, how may I help you?', isUser: false },
    {
      id: 2,
      sender: 'You',
      text: "I'm trying to create early bird tickets, but the app keeps sending me in circles. It won't let me set different prices.",
      isUser: true,
    },
    {
      id: 3,
      sender: 'Support',
      text: "Ah! The treacherous loop of endless clicking. Fear not! First, let us locate the 'Add Tier' button. It hides sometimes, like a shy moonbeam.",
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: 'You',
        text: inputText,
        isUser: true,
      },
    ]);
    setInputText('');
  };

  return (
    <div className="min-h-screen w-full flex flex-col pt-[90px] items-center justify-start bg-black py-10 px-2">
      <Sidebar />
      <div className="w-full max-w-3xl rounded-2xl bg-[#1C1C1C] shadow-lg p-0">
        {/* Header */}
        <Header />
        <div className="px-8 pt-8 pb-4">
          <div className="text-2xl font-bold font-['Inter','Poppins',sans-serif] text-white">
            Query
          </div>
        </div>
        {/* Chat Area */}
        <div className="flex flex-col gap-7 px-8 pb-8 pt-2">
          {messages.map(({ id, sender, text, isUser }) => (
            <div key={id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
              {/* Icon and name */}
              <div className="flex items-center mb-0.5">
                {!isUser && (
                  <>
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#23272f] mr-2">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <circle cx="12" cy="12" r="10" fill="#fff" opacity="0.2" />
                        <text
                          x="12"
                          y="17"
                          textAnchor="middle"
                          fill="#fff"
                          fontSize="12"
                          fontFamily="Arial"
                          dy="0"
                        >
                          S
                        </text>
                      </svg>
                    </span>
                    <span className="font-semibold text-sm text-white">Support</span>
                  </>
                )}
                {isUser && (
                  <>
                    <span className="font-semibold text-sm text-white mr-2">You</span>
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#23272f]">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <circle cx="12" cy="8" r="4" fill="#fff" opacity="0.7" />
                        <rect x="6" y="14" width="12" height="6" rx="3" fill="#fff" opacity="0.7" />
                      </svg>
                    </span>
                  </>
                )}
              </div>
              {/* Bubble */}
              <div
                className={`rounded-xl px-5 py-3 mt-0 text-base max-w-[80%] w-full text-white break-words whitespace-pre-line ${
                  isUser ? 'bg-[#3479FF] text-right' : 'bg-[#9C9C9C]'
                }`}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
        {/* Input */}
        <form className="w-full px-8 pb-8" onSubmit={handleSubmit}>
          <div className="flex items-center bg-[#232323] rounded-xl px-4 py-3 mt-2">
            <TextareaAutosize
              minRows={1}
              maxRows={6}
              value={inputText}
              onChange={handleInputChange}
              placeholder="Send a message..."
              className="flex-1 resize-none bg-transparent outline-none border-none text-white placeholder-gray-300 text-base pr-3"
              style={{
                boxShadow: 'none',
                width: '100%',
                background: 'transparent',
                padding: 0,
                margin: 0,
                lineHeight: '1.5',
              }}
            />
            <button
              type="submit"
              className="ml-2 w-8 h-8 flex items-center justify-center rounded bg-transparent text-gray-400 hover:text-white transition p-0"
              style={{ minWidth: '2rem', minHeight: '2rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <polygon points="4,18 18,10 4,2 4,8 14,10 4,12" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryContent;
