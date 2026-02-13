import { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // Optional icon

export default function ChatBox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div 
        className="fixed bottom-4 right-4 flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Chat with Masjid</span>
        
        {/* Green Online Dot */}
        <span className="w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-72 p-4 z-50">
          <h2 className="text-green-700 font-bold mb-2">Masjid Online</h2>
          <div className="h-32 overflow-y-auto border p-2 mb-2">
            <p className="text-gray-600">Assalamu Alaikum! How can we help you?</p>
          </div>
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full border rounded px-2 py-1 focus:outline-none"
          />
        </div>
      )}
    </>
  );
}
