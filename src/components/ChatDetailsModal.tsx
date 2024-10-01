import React from 'react';

interface ChatDetailsModalProps {
  session: ChatSession;
  onClose: () => void;
}

const ChatDetailsModal: React.FC<ChatDetailsModalProps> = ({ session, onClose }) => {
  return (
    <div className="chat-details-modal">
      <div className="modal-header">
        <h2>{session.name}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="chat-messages">
        {session.messages.map((message) => (
          <div key={message.id} className={message.action === 'USER' ? 'user-message' : 'ai-message'}>
            <p>{message.content}</p>
            <span>{new Date(message.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDetailsModal;
