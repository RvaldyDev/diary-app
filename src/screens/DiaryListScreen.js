import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';

// 1. Impor gambar lokal di bagian atas file (Wajib statis agar tidak error bundling)
// Letakkan file local_mood.png di dalam folder assets/moods/ di root project
const localMoodImage = require('../../assets/moods/local_mood.png');

const diaryEntries = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: 'https://picsum.photos/seed/happy/80',
    moodType: 'happy',
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    moodType: 'focus',
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    moodType: 'calm',
  },
  {
    id: '4',
    title: 'Eksperimen Koding',
    date: '2025-10-03',
    preview: 'Berhasil merancang komponen React Native baru dengan struktur bersih dan rapi.',
    // 2. Gunakan variabel yang sudah di-import di atas
    moodUri: localMoodImage,
    moodType: 'excited',
  },
  {
    id: '5',
    title: 'Malam Refleksi Diri',
    date: '2025-10-02',
    preview: 'Mengevaluasi target mingguan dan merencanakan jadwal prioritas untuk esok hari.',
    moodUri: 'https://picsum.photos/seed/reflect/80',
    moodType: 'calm',
  },
];

const renderDiaryItem = ({ item }) => (
  <DiaryCard
    title={item.title}
    date={item.date}
    preview={item.preview}
    moodUri={item.moodUri}
    moodType={item.moodType}
  />
);

export default function DiaryListScreen() {
  return (
    <FlatList
      data={diaryEntries}
      renderItem={renderDiaryItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.content}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerSubtitle}>Catatan Harian</Text>
            <Text style={styles.headerTitle}>Buku Harian</Text>
          </View>
          {/* Avatar Pengguna pada Header */}
          <Image
            source={{ uri: 'https://picsum.photos/seed/useravatar/100' }}
            style={styles.avatar}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
});