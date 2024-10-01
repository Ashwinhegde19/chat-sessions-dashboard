import React from 'react';

interface ChatSessionCardProps {
  session: ChatSession;
  isSelected: boolean;
  onSelect: () => void;
}

const ChatSessionCard: React.FC<ChatSessionCardProps> = ({ session, isSelected, onSelect }) => {
  const getTimeSinceOpened = (timestamp: string) => {
    const now = new Date();
    const openedTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - openedTime.getTime()) / 60000);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInMinutes / 1440);
      return `${diffInDays} days ago`;
    }
  };

  return (
    <div
      className={`chat-session-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="dp">
        <img src={`https://randomuser.me/api/portraits/thumb/men/${session.id % 100}.jpg`} alt="DP" />
      </div>
      <div className="session-details">
        <div className="session-name">Session {session.id}</div>
      </div>
      <div className="session-time">{getTimeSinceOpened(session.messages[0].timestamp)}</div>
    </div>
  );
};

export default ChatSessionCard;