import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';

const channels = [
  {
    id: 'road-captain',
    name: 'Road Captain',
    activeUsers: 2,
    color: '#ff0000',
  },
  {
    id: 'all-members',
    name: 'All Members',
    activeUsers: 12,
    color: '#2563eb',
  },
  {
    id: 'prospects',
    name: 'Prospects',
    activeUsers: 2,
    color: '#ca8a04',
  },
  {
    id: 'emergency',
    name: 'Emergency Only',
    activeUsers: 1,
    color: '#ea580c',
  },
];

const recentTransmissions = [
  {
    id: 1,
    user: 'Baibhav "Bullet"',
    channel: 'Road Captain',
    message: 'Taking the next exit, follow my lead',
    time: '2m ago',
  },
  {
    id: 2,
    user: 'Kazi"Bullet"',
    channel: 'Prospects',
    message: 'Gaear-up',
    time: '5m ago',
  },
  {
    id: 3,
    user: 'Simon "Bullet"',
    channel: 'Road Captain',
    message: 'Copy that, road clear behind',
    time: '8m ago',
  },
];

export default function RadioScreen() {
  const [selectedChannel, setSelectedChannel] = useState('road-captain');
  const [isPushingToTalk, setIsPushingToTalk] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const handlePushToTalk = () => {
    setIsPushingToTalk(true);
    setActiveSpeaker('You');
    // Simulate releasing after 2 seconds
    setTimeout(() => {
      setIsPushingToTalk(false);
      setActiveSpeaker(null);
    }, 2000);
  };

  const handleRelease = () => {
    setIsPushingToTalk(false);
    setActiveSpeaker(null);
  };

  const selectedChannelData = channels.find(ch => ch.id === selectedChannel);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.radioIcon}>📻</Text>
            <Text style={styles.title}>Radio</Text>
          </View>
          <Text style={styles.subtitle}>Stay connected on the road</Text>
        </View>

        {/* Channel Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECT CHANNEL</Text>
          <View style={styles.channelsGrid}>
            {channels.map((channel) => (
              <TouchableOpacity
                key={channel.id}
                onPress={() => setSelectedChannel(channel.id)}
                style={[
                  styles.channelButton,
                  selectedChannel === channel.id && {
                    backgroundColor: channel.color,
                    borderColor: channel.color,
                  }
                ]}
              >
                <View style={styles.channelHeader}>
                  <Text style={styles.channelName}>{channel.name}</Text>
                  <View style={styles.usersContainer}>
                    <Text style={styles.usersIcon}>👥</Text>
                    <Text style={styles.usersCount}>{channel.activeUsers}</Text>
                  </View>
                </View>
                {selectedChannel === channel.id && (
                  <View style={styles.activeIndicator}>
                    <View style={styles.activeDot} />
                    <Text style={styles.activeText}>Active</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Active Speaker Display */}
        {activeSpeaker && (
          <View style={styles.activeSpeakerContainer}>
            <View style={styles.activeSpeakerContent}>
              <Text style={styles.volumeIcon}>🔊</Text>
              <View>
                <Text style={styles.transmittingText}>Transmitting...</Text>
                <Text style={styles.speakerText}>{activeSpeaker} is speaking</Text>
              </View>
            </View>
          </View>
        )}

        {/* Recent Transmissions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECENT TRANSMISSIONS</Text>
          <View style={styles.transmissionsContainer}>
            {recentTransmissions.map((transmission) => (
              <View key={transmission.id} style={styles.transmissionCard}>
                <View style={styles.transmissionHeader}>
                  <View style={styles.userInfo}>
                    <View style={styles.onlineDot} />
                    <Text style={styles.userName}>{transmission.user}</Text>
                  </View>
                  <Text style={styles.timeText}>{transmission.time}</Text>
                </View>
                <Text style={styles.messageText}>{transmission.message}</Text>
                <Text style={styles.channelText}>Channel: {transmission.channel}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bottom spacing for fixed button */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Push to Talk Button - Fixed at bottom */}
      <View style={styles.pttContainer}>
        <View style={styles.currentChannelContainer}>
          <Text style={styles.currentChannelText}>
            Current: <Text style={styles.currentChannelName}>{selectedChannelData?.name}</Text>
          </Text>
        </View>
        
        <Pressable
          onPressIn={handlePushToTalk}
          onPressOut={handleRelease}
          style={({ pressed }) => [
            styles.pttButton,
            isPushingToTalk && styles.pttButtonActive,
            pressed && styles.pttButtonPressed,
          ]}
        >
          <Text style={[styles.micIcon, isPushingToTalk && styles.micIconActive]}>🎤</Text>
          <Text style={styles.pttText}>
            {isPushingToTalk ? 'TRANSMITTING...' : 'PUSH TO TALK'}
          </Text>
        </Pressable>
        
        <Text style={styles.pttHint}>Hold button to transmit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 180,
  },
  header: {
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  radioIcon: {
    fontSize: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  channelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  channelButton: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  channelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  channelName: {
    fontSize: 14,
    color: '#fff',
    flex: 1,
  },
  usersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  usersIcon: {
    fontSize: 12,
  },
  usersCount: {
    fontSize: 12,
    color: '#999',
  },
  activeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
  },
  activeText: {
    fontSize: 12,
    color: '#fff',
  },
  activeSpeakerContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.5)',
    borderRadius: 8,
  },
  activeSpeakerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  volumeIcon: {
    fontSize: 20,
  },
  transmittingText: {
    fontSize: 14,
    color: '#22c55e',
    fontWeight: 'bold',
  },
  speakerText: {
    fontSize: 12,
    color: '#999',
  },
  transmissionsContainer: {
    gap: 8,
  },
  transmissionCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  transmissionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
  },
  userName: {
    fontSize: 14,
    color: '#fff',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 4,
  },
  channelText: {
    fontSize: 12,
    color: '#666',
  },
  bottomSpacer: {
    height: 40,
  },
  pttContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 32,
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  currentChannelContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  currentChannelText: {
    fontSize: 14,
    color: '#999',
  },
  currentChannelName: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  pttButton: {
    height: 96,
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  pttButtonActive: {
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  pttButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  micIcon: {
    fontSize: 40,
  },
  micIconActive: {
    opacity: 0.8,
  },
  pttText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  pttHint: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
});