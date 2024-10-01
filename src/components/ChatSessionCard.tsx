import React from 'react';

interface ChatSessionCardProps {
  session: ChatSession;
  onSelect: () => void;
}

const ChatSessionCard: React.FC<ChatSessionCardProps> = ({ session, onSelect }) => {
  return (
    <div className="chat-session-card" onClick={onSelect}>
      <h3>{session.name}</h3>
      <p>Last message: {new Date(session.messages[0].timestamp).toLocaleString()}</p>
    </div>
  );
};

export default ChatSessionCard;
