import React from 'react';

interface ChatSessionCardProps {
  session: ChatSession;
  onSelect: () => void;
}

const ChatSessionCard: React.FC<ChatSessionCardProps> = ({ session, onSelect }) => {
  return (
    <div className="chat-session-card" onClick={onSelect}>
      <div className="dp"></div>
      <div className="session-details">
        <div className="session-name">{session.name}</div>
        <div className="session-info">Agent: Property Manager</div>
        <div className="session-info">{new Date(session.messages[0].timestamp).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ChatSessionCard;