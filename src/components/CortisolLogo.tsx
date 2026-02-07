import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CortisolLogoProps {
  size?: number;
  color?: string;
  textColor?: string;
  showText?: boolean;
}

export function CortisolLogo({
  size = 40,
  color = '#ef4444',
  textColor = '#fff',
  showText = true
}: CortisolLogoProps) {
  const nodeSize = size * 0.12;
  const bondWidth = size * 0.04;

  return (
    <View style={styles.container}>
      <View style={{ width: size, height: size, position: 'relative' }}>
        {/* Molecular structure using positioned nodes */}

        {/* Ring A nodes (bottom left hexagon) */}
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.2, top: size * 0.7 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.3, top: size * 0.5 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.45, top: size * 0.45 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.55, top: size * 0.55 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.5, top: size * 0.7 }]} />

        {/* Ring B nodes (bottom right hexagon) */}
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.55, top: size * 0.3 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.7, top: size * 0.3 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.75, top: size * 0.45 }]} />

        {/* Ring C nodes (top hexagon) */}
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.6, top: size * 0.15 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.75, top: size * 0.1 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.85, top: size * 0.2 }]} />

        {/* Ring D nodes (5-membered ring) */}
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.85, top: size * 0.35 }]} />
        <View style={[styles.node, { width: nodeSize, height: nodeSize, backgroundColor: color, left: size * 0.85, top: size * 0.5 }]} />

        {/* OH groups (larger nodes) */}
        <View style={[styles.node, styles.ohGroup, { width: nodeSize * 1.3, height: nodeSize * 1.3, backgroundColor: color, left: size * 0.75, top: size * 0.03 }]} />
        <View style={[styles.node, styles.ohGroup, { width: nodeSize * 1.3, height: nodeSize * 1.3, backgroundColor: color, left: size * 0.13, top: size * 0.75 }]} />

        {/* Carbonyl group */}
        <View style={[styles.node, styles.ohGroup, { width: nodeSize * 1.3, height: nodeSize * 1.3, backgroundColor: color, left: size * 0.93, top: size * 0.55 }]} />

        {/* Bonds (thin rectangles) */}
        <View style={[styles.bond, { width: size * 0.15, height: bondWidth, backgroundColor: color, left: size * 0.22, top: size * 0.6, transform: [{ rotate: '-45deg' }] }]} />
        <View style={[styles.bond, { width: size * 0.2, height: bondWidth, backgroundColor: color, left: size * 0.35, top: size * 0.48, transform: [{ rotate: '15deg' }] }]} />
        <View style={[styles.bond, { width: size * 0.15, height: bondWidth, backgroundColor: color, left: size * 0.48, top: size * 0.52, transform: [{ rotate: '65deg' }] }]} />
        <View style={[styles.bond, { width: size * 0.15, height: bondWidth, backgroundColor: color, left: size * 0.5, top: size * 0.4, transform: [{ rotate: '-60deg' }] }]} />
        <View style={[styles.bond, { width: size * 0.2, height: bondWidth, backgroundColor: color, left: size * 0.62, top: size * 0.37, transform: [{ rotate: '0deg' }] }]} />
        <View style={[styles.bond, { width: size * 0.15, height: bondWidth, backgroundColor: color, left: size * 0.72, top: size * 0.35, transform: [{ rotate: '60deg' }] }]} />
      </View>

      {showText && (
        <Text style={[styles.text, { color: textColor, fontSize: size * 0.35 }]}>Pathlab18</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  node: {
    position: 'absolute',
    borderRadius: 100,
  },
  ohGroup: {
    opacity: 0.9,
  },
  bond: {
    position: 'absolute',
    borderRadius: 2,
  },
  text: {
    fontWeight: '700',
    marginTop: 4,
  },
});
