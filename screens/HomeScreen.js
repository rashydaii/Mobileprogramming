import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

interface HomeScreenProps {
  navigation?: any;
  onLogout?: () => void;
}

export default function HomeScreen({ navigation, onLogout }: HomeScreenProps) {
  return (
    <ScrollView style={styles.container}>
      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Club Logo/Patch */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          {/* Replace with your actual logo */}
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoTextTop}>HELLBOUND</Text>
            <Text style={styles.logoTextMC}>MC</Text>
            <Text style={styles.logoTextBottom}>KATHMANDU</Text>
          </View>
        </View>
      </View>

      {/* Club Name */}
      <Text style={styles.clubName}>HELLBOUND MC</Text>

      {/* Motto */}
      <Text style={styles.motto}>Bound for Redemption</Text>

      {/* Description */}
      <Text style={styles.description}>
        Founded in the heart of the open road, Hellbound MC is more than just a
        club—it's a brotherhood forged in steel and bound by honor. We ride
        together, we stand together, and we face every challenge with unwavering
        resolve.
      </Text>

      {/* Our Values Section */}
      <View style={styles.valuesSection}>
        <Text style={styles.valuesTitle}>Our Values</Text>
        
        <View style={styles.valueItem}>
          <Text style={styles.valueBullet}>•</Text>
          <Text style={styles.valueText}>Brotherhood</Text>
        </View>

        <View style={styles.valueItem}>
          <Text style={styles.valueBullet}>•</Text>
          <Text style={styles.valueText}>Loyalty</Text>
        </View>

        <View style={styles.valueItem}>
          <Text style={styles.valueBullet}>•</Text>
          <Text style={styles.valueText}>Respect</Text>
        </View>

        <View style={styles.valueItem}>
          <Text style={styles.valueBullet}>•</Text>
          <Text style={styles.valueText}>Discipline</Text>
        </View>
      </View>

      {/* Quick Access Cards */}
      <View style={styles.quickAccessSection}>
        <TouchableOpacity
          style={styles.accessCard}
          onPress={() => navigation?.navigate('Rules')}
        >
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🛡️</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Club Rules</Text>
            <Text style={styles.cardSubtitle}>Live by the code, ride with honor</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accessCard}
          onPress={() => navigation?.navigate('Gallery')}
        >
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>📷</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Photo Gallery</Text>
            <Text style={styles.cardSubtitle}>Memories from the road</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom spacing */}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoutContainer: {
    alignItems: 'flex-end',
    padding: 20,
    paddingTop: 40,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoutIcon: {
    fontSize: 16,
  },
  logoutText: {
    color: '#999',
    fontSize: 14,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBorder: {
    width: 192,
    height: 192,
    backgroundColor: '#000',
    borderWidth: 4,
    borderColor: '#ff0000',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  logoPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextTop: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  logoTextMC: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  logoTextBottom: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  clubName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 3,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  motto: {
    fontSize: 16,
    color: '#ff0000',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 15,
    color: '#d1d5db',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  valuesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  valuesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  valueBullet: {
    color: '#ff0000',
    fontSize: 20,
    marginRight: 12,
  },
  valueText: {
    color: '#d1d5db',
    fontSize: 16,
    flex: 1,
  },
  quickAccessSection: {
    paddingHorizontal: 20,
    gap: 12,
  },
  accessCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#999',
    fontSize: 14,
  },
  bottomSpacer: {
    height: 40,
  },
});