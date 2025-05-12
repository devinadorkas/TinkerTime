import React, { useEffect, useRef } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Pressable, 
  Linking,
  Animated,
  Easing
} from 'react-native';
import { ArrowLeft, Calendar, Star, Profile, Money, Clock, Location } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const WorkshopDetail = ({ route }) => {
  const navigation = useNavigation();
  const { workshop } = route.params;

  // Animasi values
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const contentSlide = useRef(new Animated.Value(30)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;
  const detailItemsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence animations
    Animated.sequence([
      // Image fade in
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Content slide up
      Animated.timing(contentSlide, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      // Detail items animation
      Animated.timing(detailItemsAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      // Button animation
      Animated.spring(buttonScale, {
        toValue: 1,
        tension: 30,
        friction: 7,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleRegister = () => {
    Linking.openURL('https://example.com/register');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Animated header image */}
      <Animated.Image 
        source={{ uri: workshop.image }} 
        style={[
          styles.workshopImage,
          { opacity: imageOpacity }
        ]}
      />
      
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color={colors.white()} />
      </Pressable>

      {/* Animated content */}
      <Animated.View style={[
        styles.content,
        { 
          transform: [{ translateY: contentSlide }],
          opacity: contentSlide.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0]
          })
        }
      ]}>
        <Text style={styles.title}>{workshop.title}</Text>
        
        <View style={styles.instructorContainer}>
          <Profile size={20} color={colors.purple()} />
          <Text style={styles.instructor}>By {workshop.instructor}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Star size="20" color={colors.yellow()} variant="Bold" />
          <Text style={styles.rating}>{workshop.rating} ({workshop.reviews} reviews)</Text>
        </View>

        <Text style={styles.description}>{workshop.description}</Text>

        {/* Animated details container */}
        <Animated.View style={[
          styles.detailsContainer,
          {
            opacity: detailItemsAnim,
            transform: [{
              translateY: detailItemsAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0]
              })
            }]
          }
        ]}>
          {[
            { icon: <Calendar size={20} color={colors.pink()} />, text: workshop.date },
            { icon: <Clock size={20} color={colors.pink()} />, text: workshop.time },
            { icon: <Location size={20} color={colors.pink()} />, text: workshop.location },
            { icon: <Money size={20} color={colors.pink()} />, text: `$${workshop.price}` }
          ].map((item, index) => (
            <Animated.View 
              key={index}
              style={[
                styles.detailItem,
                {
                  opacity: detailItemsAnim,
                  transform: [{
                    translateX: detailItemsAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [index % 2 === 0 ? -20 : 20, 0]
                    })
                  }]
                }
              ]}
            >
              {item.icon}
              <Text style={index === 3 ? styles.price : styles.detailText}>
                {item.text}
              </Text>
            </Animated.View>
          ))}
        </Animated.View>

        {/* Animated register button */}
        <Animated.View style={{
          transform: [{ scale: buttonScale }]
        }}>
          <Pressable 
            style={styles.registerButton} 
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Register Now</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  workshopImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: colors.purple(0.7),
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.darkPurple(),
    marginBottom: 10,
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  instructor: {
    fontSize: 16,
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPurple(),
    marginLeft: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rating: {
    fontSize: 14,
    fontFamily: fontType['Otf-Medium'],
    color: colors.gray(0.8),
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkPurple(),
    lineHeight: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: colors.lightPurple(0.1),
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 15,
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPurple(),
    marginLeft: 10,
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontFamily: fontType['Otf-Bold'],
    color: colors.pink(),
    marginLeft: 10,
  },
  registerButton: {
    backgroundColor: colors.pink(),
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.pink(),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  registerButtonText: {
    fontSize: 18,
    fontFamily: fontType['Otf-Bold'],
    color: colors.white(),
  },
});

export default WorkshopDetail;