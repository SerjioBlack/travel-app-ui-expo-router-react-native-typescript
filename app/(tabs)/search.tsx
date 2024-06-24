import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import Colors from '@/constants/Colors';

const prizes = [
  'Free Trip to Paris',
  '50% Off Next Tour',
  'Free Souvenir',
  'Discount Voucher',
  'Free Meal',
  'VIP Tour Access',
];

const FortuneWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<string | null>(null);

  const rotation = useSharedValue(0);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    const spinDuration = 5000;
    const spinAngle = 360 * 5 + Math.random() * 360;
    rotation.value = withTiming(spinAngle, {
      duration: spinDuration,
      easing: Easing.out(Easing.cubic),
    }, (finished) => {
      if (finished) {
        const finalAngle = spinAngle % 360;
        const prize = getPrize(finalAngle);
        setWonPrize(prize);
        setTimeout(() => {
          Alert.alert('Congratulations!', `You won ${prize}!`);
          setSpinning(false);
        }, 500);
      }
    });
  };

  const getPrize = (angle: number) => {
    const index = Math.floor(angle / (360 / prizes.length));
    return prizes[index];
  };

  const wheelRotationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={spinWheel} disabled={spinning}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
      <View style={styles.wheelContainer}>
        <Animated.Image source={require('../../assets/images/wheel.png')} style={[styles.wheelImage, wheelRotationStyle]} />
        <View style={styles.arrowContainer}>
          <Image source={require('../../assets/images/arrow.png')} style={styles.arrowImage} />
        </View>
      </View>
      {wonPrize && <Text style={styles.wonPrizeText}>Congratulations! You won {wonPrize}!</Text>}
    </View>
  );
};

export default FortuneWheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  wheelContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  arrowContainer: {
    position: 'absolute',
    top: -70, 
    left: 140, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 20,
    height: 150,
    resizeMode: 'contain',
  },
  wonPrizeText: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
});
