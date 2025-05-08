import React from 'react';
import {View, Text, ImageBackground, Pressable, StyleSheet} from 'react-native';
import {fontType, colors} from '../theme';
import {MagicStar} from 'iconsax-react-native';

const WorkshopCard = ({data, onPress}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{uri: data.image}}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.cardBadge}>
          <Text style={styles.badgeText}>{data.level}</Text>
        </View>
      </ImageBackground>
      
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle} numberOfLines={1}>{data.title}</Text>
          <View style={styles.ratingContainer}>
            <MagicStar size="16" color={colors.yellow()} variant="Bold" />
            <Text style={styles.ratingText}>{data.rating}</Text>
          </View>
        </View>
        
        <Text style={styles.cardDescription} numberOfLines={2}>{data.description}</Text>
        
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>${data.price}</Text>
          <Text style={styles.cardDuration}>⏱ {data.duration}</Text>
        </View>
        
        <View style={styles.cardInstructor}>
          <Text style={styles.instructorText}>with {data.instructor}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white(),
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    shadowColor: colors.pink(),
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardImage: {
    height: 180,
    width: '100%',
  },
  imageStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: colors.pink(),
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  badgeText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.white(),
    fontSize: 12,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontFamily: fontType['Otf-Bold'],
    color: colors.darkPurple(),
    fontSize: 18,
    flex: 1,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.darkPink(),
    fontSize: 14,
    marginLeft: 5,
  },
  cardDescription: {
    fontFamily: fontType['Otf-Regular'],
    color: colors.gray(),
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardPrice: {
    fontFamily: fontType['Otf-Bold'],
    color: colors.purple(),
    fontSize: 20,
  },
  cardDuration: {
    fontFamily: fontType['Otf-Medium'],
    color: colors.gray(0.7),
    fontSize: 14,
  },
  cardInstructor: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGray(),
    paddingTop: 10,
  },
  instructorText: {
    fontFamily: fontType['Otf-MediumItalic'],
    color: colors.darkPink(),
    fontSize: 14,
  },
});

export default WorkshopCard;