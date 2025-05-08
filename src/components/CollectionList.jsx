import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
import {Heart, MoreCircle} from 'iconsax-react-native';
import {fontType, colors} from '../theme';

const CollectionList = ({data, title, style}) => {
  return (
    <View style={[styles.listContainer, style]}>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.listColumnWrapper}
        contentContainerStyle={styles.listContent}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable style={styles.card}>
            <Image source={{uri: item.image}} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.cardCreator} numberOfLines={1}>
                by {item.creator}
              </Text>
              <View style={styles.cardFooter}>
                <Pressable style={styles.favoriteButton}>
                  <Heart
                    size={18}
                    color={item.isFavorite ? colors.pink() : colors.gray(0.6)}
                    variant={item.isFavorite ? 'Bold' : 'Linear'}
                  />
                </Pressable>
                <Text style={styles.itemCount}>{item.items} items</Text>
                <Pressable style={styles.moreButton}>
                  <MoreCircle size={18} color={colors.darkPurple()} />
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No collections found</Text>
          </View>
        }
      />
    </View>
  );
};

export default CollectionList;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 10,
  },
  listTitle: {
    fontFamily: fontType['Otf-Bold'],
    fontSize: 18,
    color: colors.darkPurple(),
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  listColumnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: colors.white(),
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: colors.purple(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontFamily: fontType['Otf-SemiBold'],
    fontSize: 14,
    color: colors.darkPurple(),
    marginBottom: 4,
  },
  cardCreator: {
    fontFamily: fontType['Otf-MediumItalic'],
    fontSize: 12,
    color: colors.darkPink(),
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoriteButton: {
    padding: 4,
  },
  itemCount: {
    fontFamily: fontType['Otf-Medium'],
    fontSize: 11,
    color: colors.gray(0.7),
    flex: 1,
    marginLeft: 5,
  },
  moreButton: {
    padding: 4,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    width: '100%',
  },
  emptyText: {
    fontFamily: fontType['Otf-MediumItalic'],
    fontSize: 16,
    color: colors.gray(0.6),
  },
});