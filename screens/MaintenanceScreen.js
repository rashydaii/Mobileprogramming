import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const maintenanceData = [
  {
    id: 1,
    task: 'Oil Change',
    icon: '💧',
    dueIn: '250 miles',
    status: 'urgent',
    lastDone: 'Nov 15, 2025',
  },
  {
    id: 2,
    task: 'Tire Pressure Check',
    icon: '⚙️',
    dueIn: 'Overdue',
    status: 'urgent',
    lastDone: null,
  },
  {
    id: 3,
    task: 'Chain Lubrication',
    icon: '🔧',
    dueIn: '500 miles',
    status: 'soon',
    lastDone: 'Dec 1, 2025',
  },
  {
    id: 4,
    task: 'Brake Inspection',
    icon: '🛑',
    dueIn: '1,200 miles',
    status: 'ok',
    lastDone: 'Oct 20, 2025',
  },
];

export default function GarageScreen() {
  const [items, setItems] = useState(maintenanceData);

  const urgentCount = items.filter(item => item.status === 'urgent').length;
  const soonCount = items.filter(item => item.status === 'soon').length;

  const handleMarkComplete = (itemId) => {
    console.log(`Marking item ${itemId} as complete`);
    // Update the item status
    setItems(items.map(item => 
      item.id === itemId 
        ? { ...item, lastDone: new Date().toLocaleDateString(), status: 'ok' }
        : item
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'urgent':
        return {
          border: '#dc2626',
          bg: 'rgba(220, 38, 38, 0.05)',
          badge: '#dc2626',
          badgeText: '#fff',
        };
      case 'soon':
        return {
          border: '#ca8a04',
          bg: 'rgba(202, 138, 4, 0.05)',
          badge: '#ca8a04',
          badgeText: '#000',
        };
      case 'ok':
        return {
          border: '#333',
          bg: '#1a1a1a',
          badge: '#444',
          badgeText: '#d1d5db',
        };
      default:
        return {
          border: '#333',
          bg: '#1a1a1a',
          badge: '#444',
          badgeText: '#d1d5db',
        };
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Bike Maintenance</Text>
        <Text style={styles.subtitle}>Keep your ride in top condition</Text>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.urgentCard}>
          <View style={styles.cardTop}>
            <Text style={styles.urgentIcon}>⚠️</Text>
            <Text style={styles.cardLabel}>Urgent</Text>
          </View>
          <Text style={styles.urgentCount}>{urgentCount}</Text>
        </View>

        <View style={styles.soonCard}>
          <View style={styles.cardTop}>
            <Text style={styles.soonIcon}>⏰</Text>
            <Text style={styles.cardLabel}>Due Soon</Text>
          </View>
          <Text style={styles.soonCount}>{soonCount}</Text>
        </View>
      </View>

      {/* Maintenance Items */}
      <View style={styles.itemsList}>
        {items.map((item) => {
          const colors = getStatusColor(item.status);
          
          return (
            <View
              key={item.id}
              style={[
                styles.itemCard,
                { 
                  borderColor: colors.border,
                  backgroundColor: colors.bg,
                }
              ]}
            >
              {/* Item Header */}
              <View style={styles.itemHeader}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemIcon}>{item.icon}</Text>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTask}>{item.task}</Text>
                    {item.lastDone && (
                      <Text style={styles.lastDoneText}>
                        Last done: {item.lastDone}
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={[
                    styles.badge,
                    { backgroundColor: colors.badge }
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: colors.badgeText }
                    ]}
                  >
                    {item.dueIn}
                  </Text>
                </View>
              </View>

              {/* Mark Complete Button */}
              <TouchableOpacity
                style={styles.completeButton}
                onPress={() => handleMarkComplete(item.id)}
              >
                <Text style={styles.completeButtonText}>Mark as Complete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {/* Bottom Spacing */}
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
  summaryContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  urgentCard: {
    flex: 1,
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.3)',
    borderRadius: 8,
    padding: 16,
  },
  soonCard: {
    flex: 1,
    backgroundColor: 'rgba(202, 138, 4, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(202, 138, 4, 0.3)',
    borderRadius: 8,
    padding: 16,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  urgentIcon: {
    fontSize: 20,
  },
  soonIcon: {
    fontSize: 20,
  },
  cardLabel: {
    fontSize: 14,
    color: '#d1d5db',
  },
  urgentCount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  soonCount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ca8a04',
  },
  itemsList: {
    gap: 12,
  },
  itemCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flex: 1,
  },
  itemIcon: {
    fontSize: 20,
    marginTop: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemTask: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  lastDoneText: {
    fontSize: 12,
    color: '#666',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#2d2d2d',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 40,
  },
});