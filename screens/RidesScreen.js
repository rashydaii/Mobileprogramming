import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const rides = [
  {
    id: 1,
    name: 'Bikes and Coffee Ride',
    date: 'Dec 20, 2024',
    time: '8:00 AM',
    startLocation: 'Enfield MotoShop- Thimi',
    endLocation: 'Lakeside Café',
    distance: '87 miles',
    participants: 12,
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'New Year Summit Ride',
    date: 'Jan 1, 2025',
    time: '7:00 AM',
    startLocation: 'Enfield MotoShop- Thimi',
    endLocation: 'Kalinchowk',
    distance: '133 Km',
    participants: 8,
    status: 'upcoming',
  },
  {
    id: 3,
    name: 'Ride to Kulekhani',
    date: 'feb 1, 2025',
    time: '6:00 AM',
    startLocation: 'Enfield MotoShop- Thimi',
    endLocation: 'Indrasarobar Lake',
    distance: '45.6 km',
    participants: 15,
    status: 'upcoming',
  },
];

export default function RidesScreen() {
  const handleJoinRide = (rideId) => {
    console.log(`Joining ride ${rideId}`);
    // Add your join ride logic here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Upcoming Rides</Text>
      
      <View style={styles.ridesContainer}>
        {rides.map((ride) => (
          <View key={ride.id} style={styles.rideCard}>
            {/* Ride Name */}
            <Text style={styles.rideName}>{ride.name}</Text>
            
            {/* Date and Time */}
            <View style={styles.dateTimeContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.icon}>📅</Text>
                <Text style={styles.infoText}>{ride.date}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.icon}>🕐</Text>
                <Text style={styles.infoText}>{ride.time}</Text>
              </View>
            </View>
            
            {/* Start Location */}
            <View style={styles.locationContainer}>
              <View style={styles.locationRow}>
                <View style={styles.dotContainer}>
                  <View style={[styles.dot, styles.startDot]} />
                </View>
                <View style={styles.locationInfo}>
                  <Text style={styles.locationLabel}>START</Text>
                  <Text style={styles.locationText}>{ride.startLocation}</Text>
                </View>
              </View>
            </View>
            
            {/* Route Line */}
            <View style={styles.routeLineContainer}>
              <View style={styles.routeLine} />
              <Text style={styles.distanceText}>{ride.distance}</Text>
            </View>
            
            {/* End Location */}
            <View style={styles.locationContainer}>
              <View style={styles.locationRow}>
                <View style={styles.dotContainer}>
                  <View style={[styles.dot, styles.endDot]} />
                </View>
                <View style={styles.locationInfo}>
                  <Text style={styles.locationLabel}>END</Text>
                  <Text style={styles.locationText}>{ride.endLocation}</Text>
                </View>
              </View>
            </View>
            
            {/* Footer */}
            <View style={styles.footer}>
              <View style={styles.participantsContainer}>
                <Text style={styles.icon}>👥</Text>
                <Text style={styles.participantsText}>{ride.participants} riders</Text>
              </View>
              <TouchableOpacity 
                style={styles.joinButton}
                onPress={() => handleJoinRide(ride.id)}
              >
                <Text style={styles.joinButtonText}>Join Ride</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  ridesContainer: {
    gap: 16,
  },
  rideCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
  },
  rideName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#999',
  },
  locationContainer: {
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  dotContainer: {
    paddingTop: 4,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  startDot: {
    backgroundColor: '#22c55e',
  },
  endDot: {
    backgroundColor: '#ff0000',
  },
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  locationText: {
    fontSize: 14,
    color: '#e5e5e5',
  },
  routeLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginLeft: 6,
    marginVertical: 8,
  },
  routeLine: {
    width: 2,
    height: 32,
    backgroundColor: '#444',
  },
  distanceText: {
    fontSize: 12,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
    marginTop: 16,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  participantsText: {
    fontSize: 14,
    color: '#999',
  },
  joinButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});