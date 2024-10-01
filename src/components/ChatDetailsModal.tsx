import { ChatSession } from "../types";

interface ChatDetailsModalProps {
  session: ChatSession;
  onClose: () => void;
}

const ChatDetailsModal: React.FC<ChatDetailsModalProps> = ({ session }) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-details">
      <div className="modal-header">
        <div className="dp">
          <img src={`https://randomuser.me/api/portraits/thumb/men/${session.id % 100}.jpg`} alt="DP" />
        </div>
        <h2>Session {session.id}</h2>
      </div>
      <div className="chat-messages">
        {session.messages.map((message, index) => (
          <div key={`${message.id}-${index}`} className="message-container">
            <div className={message.action === 'USER' ? 'user-message' : 'ai-message'}>
              <p>{message.content}</p>
            </div>
            <div className="time-stamp">
              <p>{formatDate(message.timestamp)} {formatTime(message.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDetailsModal;