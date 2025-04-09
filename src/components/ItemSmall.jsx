import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {fontType, colors} from '../theme';

const ItemSmall = ({item, onPress}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white(),
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: colors.black(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.deepBlue(),
  },
  description: {
    fontSize: 14,
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkBlue(),
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkBlue(0.6),
    marginTop: 5,
  },
});

export default ItemSmall;