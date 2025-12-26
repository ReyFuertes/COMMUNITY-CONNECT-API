export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  participantName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  status: 'online' | 'offline' | 'away';
  avatar?: string;
  image?: string;
  color?: string;
}
