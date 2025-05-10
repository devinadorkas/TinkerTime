import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';
import { ArrowLeft, Calendar, Star, Profile, Money, Clock, Location } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const WorkshopDetail = ({ route }) => {
  const navigation = useNavigation();
  const { workshop } = route.params;

  const handleRegister = () => {
    Linking.openURL('https://example.com/register');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header dengan gambar workshop */}
      <Image source={{ uri: workshop.image }} style={styles.workshopImage} />
      
      {/* Tombol back */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color={colors.white()} />
      </Pressable>

      {/* Konten utama */}
      <View style={styles.content}>
        <Text style={styles.title}>{workshop.title}</Text>
        
        <View style={styles.instructorContainer}>
          <Profile size={20} color={colors.purple()} />
          <Text style={styles.instructor}>By {workshop.instructor}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Star size={20} color={colors.yellow()} variant="Bold" />
          <Text style={styles.rating}>{workshop.rating} ({workshop.reviews} reviews)</Text>
        </View>

        <Text style={styles.description}>{workshop.description}</Text>

        {/* Detail info workshop */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Calendar size={20} color={colors.pink()} />
            <Text style={styles.detailText}>{workshop.date}</Text>
          </View>
          <View style={styles.detailItem}>
            <Clock size={20} color={colors.pink()} />
            <Text style={styles.detailText}>{workshop.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <Location size={20} color={colors.pink()} />
            <Text style={styles.detailText}>{workshop.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Money size={20} color={colors.pink()} />
            <Text style={styles.price}>${workshop.price}</Text>
          </View>
        </View>

        {/* Tombol daftar */}
        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register Now</Text>
        </Pressable>
      </View>
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