import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const UserProfile = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/129678725?v=4' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Serhii Sheyko</Text>
      <Text style={styles.bio}>
        Software Developer with a passion for creating amazing mobile applications.
      </Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => handlePress('https://t.me/Serjio_Black')}>
          <FontAwesome name="telegram" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://www.linkedin.com/in/serjioblack/')}>
          <FontAwesome name="linkedin" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://serjioblack-developer-portfolio.netlify.app/portfolio')}>
          <FontAwesome name="facebook" size={30} color={Colors.primaryColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});
