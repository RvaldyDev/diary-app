import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodUri, moodType }) {
  // Fungsi untuk memberikan variasi border dan warna kartu berdasarkan mood
  const getMoodStyle = (type) => {
    switch (type) {
      case 'happy':
        return { borderColor: '#10b981', backgroundColor: '#f0fdf4' }; // Hijau
      case 'focus':
        return { borderColor: '#3b82f6', backgroundColor: '#eff6ff' }; // Biru
      case 'calm':
        return { borderColor: '#8b5cf6', backgroundColor: '#f5f3ff' }; // Ungu
      case 'excited':
        return { borderColor: '#f59e0b', backgroundColor: '#fffbeb' }; // Oranye
      default:
        return { borderColor: '#e5e7eb', backgroundColor: '#ffffff' }; // Default
    }
  };

  // Mengecek apakah moodUri menggunakan require (lokal) atau URL (remote)
  const imageSource = typeof moodUri === 'number' ? moodUri : { uri: moodUri };

  return (
    <View style={[styles.card, getMoodStyle(moodType)]}>
      <Image source={imageSource} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    color: '#374151',
  },
});