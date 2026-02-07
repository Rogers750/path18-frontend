import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface QuickReplyProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function QuickReply({ options, onSelect }: QuickReplyProps) {
  return (
    <Animated.View entering={FadeInUp.delay(100).duration(300)} style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onSelect(option)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginLeft: 40,
  },
  scrollContent: {
    paddingRight: 16,
    gap: 8,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#6366f1',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
});
