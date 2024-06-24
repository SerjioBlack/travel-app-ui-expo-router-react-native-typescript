import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const TouristCompany = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'data:image/png;base64,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' }}
        style={styles.companyImage}
      />
      <Text style={styles.companyName}>Explore The World</Text>
      <Text style={styles.description}>
        Explore The World is a leading travel agency offering customized tour packages, adventure trips, and unforgettable experiences. Let us help you discover the beauty of our planet.
      </Text>
      <Text style={styles.contactTitle}>Contact Us:</Text>
      <Text style={styles.contactDetails}>Phone: +1 (123) 456-7890</Text>
      <Text style={styles.contactDetails}>Email: info@exploretheworld.com</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => handlePress('https://www.facebook.com/exploretheworld')}>
          <FontAwesome name="facebook" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://www.instagram.com/exploretheworld')}>
          <FontAwesome name="instagram" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://www.twitter.com/exploretheworld')}>
          <FontAwesome name="twitter" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TouristCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
    padding: 20,
  },
  companyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
  contactDetails: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});
