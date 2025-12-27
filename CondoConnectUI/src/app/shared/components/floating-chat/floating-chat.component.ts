import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { Conversation, ChatMessage, ChatDateDivider, ChatDisplayItem } from '../../models/chat.model';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { DatePipe } from '@angular/common'; // Import DatePipe

@Component({
  selector: 'app-floating-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, AvatarModule, BadgeModule, TooltipModule, RippleModule, HighlightPipe, DatePipe],
  templateUrl: './floating-chat.component.html',
  styleUrl: './floating-chat.component.scss'
})
export class FloatingChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  public isExpanded: boolean = true;
  public newMessage: string = '';
  public isSearchActive: boolean = false;
  public searchQuery: string = '';
  public groupedMessages: ChatDisplayItem[] = []; // New property for grouped messages

  public conversations: Conversation[] = [
    { id: 'general', participantName: 'General Chat', lastMessage: 'All posts secured for shift change.', lastMessageTime: '1m ago', unreadCount: 0, status: 'online', avatar: 'pi-users', color: '#E3F2FD' },
    { id: '1', participantName: 'Alex Gate', lastMessage: 'Visitor for 101 approved.', lastMessageTime: '2m ago', unreadCount: 1, status: 'online', color: '#E8F5E9', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
    { id: '2', participantName: 'Maria Patrol', lastMessage: 'Level 2 hallway clear.', lastMessageTime: '15m ago', unreadCount: 0, status: 'online', color: '#FFF3E0' },
    { id: '3', participantName: 'Sam Gate', lastMessage: 'Delivery for Unit 505.', lastMessageTime: '1h ago', unreadCount: 0, status: 'away', color: '#F3E5F5', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
    { id: '4', participantName: 'David CCTV', lastMessage: 'Checking perimeter cameras.', lastMessageTime: '5m ago', unreadCount: 0, status: 'online', color: '#E0F2F1' },
    { id: '5', participantName: 'Elena Lobby', lastMessage: 'Guest checked in for 202.', lastMessageTime: '10m ago', unreadCount: 0, status: 'online', color: '#FCE4EC', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png' },
    { id: '6', participantName: 'Chris Patrol', lastMessage: 'Parking lot sweep done.', lastMessageTime: '20m ago', unreadCount: 0, status: 'online', color: '#E0E0E0' },
    { id: '7', participantName: 'Sarah Admin', lastMessage: 'New badges prepared.', lastMessageTime: '30m ago', unreadCount: 0, status: 'online', color: '#FFF9C4' },
    { id: '8', participantName: 'Tom Night', lastMessage: 'Handing over shift soon.', lastMessageTime: '45m ago', unreadCount: 0, status: 'away', color: '#FFEBEE' },
    { id: '9', participantName: 'Lisa Visitor', lastMessage: 'Temp pass issued.', lastMessageTime: '1h ago', unreadCount: 0, status: 'offline', color: '#F1F8E9' },
    { id: '10', participantName: 'Guard Post 4', lastMessage: 'Gate secure.', lastMessageTime: '2h ago', unreadCount: 0, status: 'online', color: '#E1F5FE' }
  ];

  public messagesMap: { [key: string]: ChatMessage[] } = {
    'general': [
      { id: 'g1', senderId: 'alex', senderName: 'Alex', content: 'Gate A reporting in. Morning shift started.', timestamp: new Date(2025, 11, 25, 9, 0), isMe: false },
      { id: 'g2', senderId: 'sam', senderName: 'Sam', content: 'Gate B active. All systems green.', timestamp: new Date(2025, 11, 25, 9, 5), isMe: false },
      { id: 'g3', senderId: 'me', senderName: 'Admin', content: 'Good morning team. High occupancy expected today.', timestamp: new Date(2025, 11, 25, 9, 10), isMe: true },
      { id: 'g4', senderId: 'maria', senderName: 'Maria', content: 'Starting floor patrol on Level 1.', timestamp: new Date(2025, 11, 25, 10, 0), isMe: false },
      { id: 'g5', senderId: 'david', senderName: 'David', content: 'CCTV feed 4 showing a delivery truck at the rear.', timestamp: new Date(2025, 11, 25, 10, 15), isMe: false },
      { id: 'g6', senderId: 'sam', senderName: 'Sam', content: 'Acknowledged David, checking credentials now.', timestamp: new Date(2025, 11, 25, 10, 20), isMe: false },
      { id: 'g7', senderId: 'elena', senderName: 'Elena', content: 'Lobby is busy. 3 guests waiting for check-in.', timestamp: new Date(2025, 11, 26, 8, 30), isMe: false },
      { id: 'g8', senderId: 'me', senderName: 'Admin', content: 'Maria, please assist Elena at the lobby if possible.', timestamp: new Date(2025, 11, 26, 8, 45), isMe: true },
      { id: 'g9', senderId: 'maria', senderName: 'Maria', content: 'On my way to the lobby.', timestamp: new Date(2025, 11, 26, 8, 50), isMe: false },
      { id: 'g10', senderId: 'chris', senderName: 'Chris', content: 'External perimeter sweep completed. All clear.', timestamp: new Date(2025, 11, 26, 11, 0), isMe: false },
      { id: 'g11', senderId: 'sarah', senderName: 'Sarah', content: 'Reminder: Fire drill at 2 PM today.', timestamp: new Date(2025, 11, 27, 13, 0), isMe: false },
      { id: 'g12', senderId: 'alex', senderName: 'Alex', content: 'Visitor for 101 approved and logged.', timestamp: new Date(2025, 11, 27, 13, 10), isMe: false },
      { id: 'g13', senderId: 'david', senderName: 'David', content: 'Suspicious vehicle spotted near the south fence.', timestamp: new Date(2025, 11, 27, 14, 0), isMe: false },
      { id: 'g14', senderId: 'me', senderName: 'Admin', content: 'Chris, please investigate the south fence immediately.', timestamp: new Date(2025, 11, 27, 14, 5), isMe: true },
      { id: 'g15', senderId: 'chris', senderName: 'Chris', content: 'Investigating... It was just a delivery driver lost.', timestamp: new Date(2025, 11, 27, 14, 15), isMe: false },
      { id: 'g16', senderId: 'me', senderName: 'Admin', content: 'Thanks for the quick update, Chris.', timestamp: new Date(2025, 11, 27, 14, 20), isMe: true },
      { id: 'g17', senderId: 'tom', senderName: 'Tom', content: 'Night shift handover notes uploaded to system.', timestamp: new Date(2025, 11, 28, 6, 0), isMe: false },
      { id: 'g18', senderId: 'lisa', senderName: 'Lisa', content: 'Visitor passes for the event are ready.', timestamp: new Date(2025, 11, 28, 7, 0), isMe: false },
      { id: 'g19', senderId: 'g10', senderName: 'Post 4', content: 'Light out in stairwell C. Logged.', timestamp: new Date(2025, 11, 28, 8, 0), isMe: false },
      { id: 'g20', senderId: 'me', senderName: 'Admin', content: 'Notified maintenance for the stairwell light.', timestamp: new Date(2025, 11, 28, 8, 10), isMe: true },
      { id: 'g21', senderId: 'maria', senderName: 'Maria', content: 'Lobby guest surge cleared. Resuming patrol.', timestamp: new Date(2025, 11, 28, 9, 0), isMe: false },
      { id: 'g22', senderId: 'alex', senderName: 'Alex', content: 'All posts secured for shift change.', timestamp: new Date(2025, 11, 28, 9, 30), isMe: false }
    ],
    '1': [{ id: '101', senderId: 'alex', senderName: 'Alex', content: 'Visitor for Unit 101.', timestamp: new Date(), isMe: false }],
    '2': [{ id: '201', senderId: 'maria', senderName: 'Maria', content: 'Level 2 is clear.', timestamp: new Date(), isMe: false }],
    '3': [{ id: '301', senderId: 'sam', senderName: 'Sam', content: 'Delivery at Gate B.', timestamp: new Date(), isMe: false }],
    '4': [{ id: '401', senderId: 'david', senderName: 'David', content: 'CCTV systems normal.', timestamp: new Date(), isMe: false }],
    '5': [{ id: '501', senderId: 'elena', senderName: 'Elena', content: 'Busy morning at lobby.', timestamp: new Date(), isMe: false }],
    '6': [{ id: '601', senderId: 'chris', senderName: 'Chris', content: 'Patrol complete.', timestamp: new Date(), isMe: false }],
    '7': [{ id: '701', senderId: 'sarah', senderName: 'Sarah', content: 'Updated visitor logs.', timestamp: new Date(), isMe: false }],
    '8': [{ id: '801', senderId: 'tom', senderName: 'Tom', content: 'Night shift wrapping up.', timestamp: new Date(), isMe: false }],
    '9': [{ id: '901', senderId: 'lisa', senderName: 'Lisa', content: 'Processing visitor passes.', timestamp: new Date(), isMe: false }],
    '10': [{ id: '1001', senderId: 'g10', senderName: 'Guard 10', content: 'Post 4 secured.', timestamp: new Date(), isMe: false }]
  };

  public activeConversation: Conversation = this.conversations[0];

  public ngOnInit(): void {
    this.processMessagesForDisplay();
    this.scrollToBottom();
  }

  public ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  public selectConversation(conv: Conversation): void {
    this.activeConversation = conv;
    this.processMessagesForDisplay(); // Process messages when conversation changes
    this.scrollToBottom();
  }

  public getInitials(name: string): string {
    if (!name || name === 'General Chat') return '';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  public toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
    if (!this.isSearchActive) {
      this.searchQuery = '';
    }
  }

  public sendMessage(): void {
    if (this.newMessage.trim()) {
      if (!this.messagesMap[this.activeConversation.id]) {
        this.messagesMap[this.activeConversation.id] = [];
      }
      this.messagesMap[this.activeConversation.id].push({
        id: Date.now().toString(),
        senderId: 'me',
        senderName: 'Admin',
        content: this.newMessage,
        timestamp: new Date(),
        isMe: true
      });
      this.activeConversation.lastMessage = this.newMessage;
      this.activeConversation.lastMessageTime = 'Just now';
      this.newMessage = '';
      this.processMessagesForDisplay(); // Re-process messages after sending a new one
    }
  }

  // New method to process messages and insert date dividers
  private processMessagesForDisplay(): void {
    const currentMessages = this.messagesMap[this.activeConversation.id] || [];
    this.groupedMessages = this.groupMessagesByDate(currentMessages);
  }

    private groupMessagesByDate(messages: ChatMessage[]): ChatDisplayItem[] {

      const displayItems: ChatDisplayItem[] = [];

      let lastDate: string | null = null;

  

      messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime()); // Ensure messages are sorted by time

  

      for (const message of messages) {

        const messageDate = message.timestamp.toDateString();

        if (messageDate !== lastDate) {

          // Insert a date divider

          displayItems.push({ type: 'dateDivider', date: message.timestamp });

          lastDate = messageDate;

        }

        displayItems.push(message);

      }

      return displayItems;

    }

  

    // Type guard to check if an item is a ChatDateDivider

    public isChatDateDivider(item: ChatDisplayItem): item is ChatDateDivider {

      return (item as ChatDateDivider).type === 'dateDivider';

    }

  

      // Type guard to check if an item is a ChatMessage

  

      public isChatMessage(item: ChatDisplayItem): item is ChatMessage {

  

        return !this.isChatDateDivider(item);

  

      }

  }

  