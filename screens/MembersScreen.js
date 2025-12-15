import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const members = [
  {
    id: 1,
    name: 'NORBU "Bullet"',
    rank: 'President',
    joinedDate: 'Founding Member',
    icon: '👑',
    rides: 247,
  },
  {
    id: 2,
    name: 'Rashy "Classic"',
    rank: 'Vice President',
    joinedDate: 'Jan 2023',
    icon: '🛡️',
    rides: 198,
  },
  {
    id: 3,
    name: 'Baibhav "Reborn"',
    rank: 'Road Captain',
    joinedDate: 'Mar 2023',
    icon: '⭐',
    rides: 156,
  },
  {
    id: 4,
    name: 'Zeal "Hunter"',
    rank: 'Member',
    joinedDate: 'Jul 2024',
    icon: '⭐',
    rides: 89,
  },
  {
    id: 5,
    name: 'Anol "Thunder"',
    rank: 'Member',
    joinedDate: 'Sep 2025',
    icon: '⭐',
    rides: 67,
  },
];

export default function MembersScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Members</Text>
        <Text style={styles.subtitle}>{members.length} active riders</Text>
      </View>

      {/* Members List */}
      <View style={styles.membersList}>
        {members.map((member) => (
          <View key={member.id} style={styles.memberCard}>
            <View style={styles.memberContent}>
              {/* Icon */}
              <View style={styles.iconCircle}>
                <Text style={styles.icon}>{member.icon}</Text>
              </View>

              {/* Info */}
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberRank}>{member.rank}</Text>

                <View style={styles.memberDetails}>
                  <Text style={styles.detailText}>
                    Joined: {member.joinedDate}
                  </Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.detailText}>
                    {member.rides} rides
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 32,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
  },
  membersList: {
    gap: 12,
  },
  memberCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  memberContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  memberRank: {
    fontSize: 14,
    color: '#ff0000',
    marginBottom: 8,
  },
  memberDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#666',
  },
  dot: {
    fontSize: 12,
    color: '#666',
  },
  bottomSpacer: {
    height: 40,
  },
});
