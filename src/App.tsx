import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchChatSessions } from './services/api';
import ChatSessionCard from './components/ChatSessionCard';
import ChatDetailsModal from './components/ChatDetailsModal';

const App: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const loadSessions = async () => {
      setLoading(true);
      try {
        const data = await fetchChatSessions(page, 10);
        setSessions((prevSessions) => [...prevSessions, ...data.chat_sessions]);
        setHasMore(page < data.pages);
      } catch (err) {
        setError('Failed to load sessions. Please try again.');
      }
      setLoading(false);
    };
    loadSessions();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Sessions Dashboard</h1>
      </header>
      <div className="chat-session-list">
        {sessions.map((session) => (
          <ChatSessionCard key={session.id} session={session} onSelect={() => setSelectedSession(session)} />
        ))}
        {loading && <p>Loading more sessions...</p>}
        {error && <p>{error}</p>}
      </div>
      {selectedSession && (
        <ChatDetailsModal session={selectedSession} onClose={() => setSelectedSession(null)} />
      )}
    </div>
  );
};

export default App;
