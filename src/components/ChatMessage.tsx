import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

const BOT_AVATAR = 'https://api.dicebear.com/7.x/avataaars/png?seed=Priya&backgroundColor=6366f1&skinColor=light&top=hijab&clothesColor=6366f1';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <Animated.View
      entering={isBot ? FadeInLeft.duration(300) : FadeInRight.duration(300)}
      style={[styles.container, isBot ? styles.botContainer : styles.userContainer]}
    >
      {isBot && (
        <View style={styles.avatar}>
          <Image source={{ uri: BOT_AVATAR }} style={styles.avatarImage} />
        </View>
      )}
      <View style={[styles.bubble, isBot ? styles.botBubble : styles.userBubble]}>
        <Text style={[styles.messageText, isBot ? styles.botText : styles.userText]}>
          {message}
        </Text>
        <Text style={[styles.timestamp, isBot ? styles.botTimestamp : styles.userTimestamp]}>
          {timestamp}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  botContainer: {
    justifyContent: 'flex-start',
  },
  userContainer: {
    justifyContent: 'flex-end',
    paddingRight: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 0,
    marginRight: 4,
    marginTop: 4,
    flexShrink: 0,
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  bubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 16,
    flexShrink: 1,
  },
  botBubble: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userBubble: {
    backgroundColor: '#6366f1',
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  botText: {
    color: '#1f2937',
  },
  userText: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 11,
    marginTop: 4,
  },
  botTimestamp: {
    color: '#9ca3af',
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
