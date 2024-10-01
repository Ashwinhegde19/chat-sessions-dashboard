import axios from 'axios';

export const fetchChatSessions = async (page: number, perPage: number) => {
  const response = await axios.get(`/api/chat_sessions?page=${page}&per_page=${perPage}`);
  return response.data;
};
