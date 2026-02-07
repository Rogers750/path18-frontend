import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const CARD_WIDTH = (Dimensions.get('window').width - 16 - 10) / 2; // Account for 8px padding on each side + gap

const TEST_IMAGES: Record<string, string> = {
  'Lipid Profile': 'https://img.icons8.com/color/96/heart-with-pulse.png',
  'Sugar (Fasting)': 'https://img.icons8.com/color/96/diabetes.png',
  'LFT (Liver Function Test)': 'https://img.icons8.com/color/96/liver.png',
  'KFT (Kidney Function Test)': 'https://img.icons8.com/color/96/kidney.png',
  'HbA1c': 'https://img.icons8.com/color/96/blood-sample.png',
  'Full Body Checkup': 'https://img.icons8.com/color/96/health-checkup.png',
};

interface TestCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  parameters?: number;
  popular?: boolean;
  onSelect: () => void;
}

export function TestCard({ name, price, onSelect }: TestCardProps) {
  return (
    <Animated.View entering={FadeInUp.duration(300)}>
      <TouchableOpacity style={styles.card} onPress={onSelect} activeOpacity={0.8}>
        <Image
          source={{ uri: TEST_IMAGES[name] || 'https://img.icons8.com/color/96/test-tube.png' }}
          style={styles.testImage}
        />
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <Text style={styles.price}>₹{price}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  testImage: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6366f1',
  },
});
