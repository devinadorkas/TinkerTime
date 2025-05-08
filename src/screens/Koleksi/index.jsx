import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SearchNormal, Heart, Filter, Category} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {CollectionList} from '../../components';
import {collections, collectionCategories} from '../../data';

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredCollections = collections.filter(collection =>
    collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collection.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collection.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = activeCategory === 'all' 
    ? filteredCollections 
    : filteredCollections.filter(collection => collection.category === activeCategory);

  const finalCollections = showFavorites 
    ? filteredByCategory.filter(collection => collection.isFavorite)
    : filteredByCategory;

  return (
    <ScrollView style={styles.container}>
      {/* Header with gradient background */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>My Creative Collections</Text>
            <Text style={styles.subtitle}>Discover and organize your favorite works</Text>
          </View>
          <Image 
            source={{uri: 'https://img.freepik.com/free-vector/hand-drawn-colorful-doodle-background_23-2149015287.jpg'}}
            style={styles.headerImage}
          />
        </View>
        
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search collections..."
            placeholderTextColor={colors.gray(0.7)}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.searchIcon}>
            <SearchNormal size="20" color={colors.white()} variant="Bold" />
          </Pressable>
        </View>
      </View>

      {/* Quick actions */}
      <View style={styles.quickActions}>
        <Pressable 
          style={[
            styles.actionButton,
            showFavorites && styles.activeAction
          ]}
          onPress={() => setShowFavorites(!showFavorites)}
        >
          <Heart 
            size="20" 
            color={showFavorites ? colors.white() : colors.pink()} 
            variant={showFavorites ? "Bold" : "Linear"} 
          />
          <Text style={[
            styles.actionText,
            showFavorites && styles.activeActionText
          ]}>Favorites</Text>
        </Pressable>
        
        <Pressable style={styles.actionButton}>
          <Category size="20" color={colors.pink()} variant="Bold" />
          <Text style={styles.actionText}>Categories</Text>
        </Pressable>
      </View>

      {/* Categories as pills */}
      <View style={styles.categoryPillsContainer}>
        {collectionCategories.map(category => (
          <Pressable 
            key={category.id} 
            style={[
              styles.categoryPill,
              activeCategory === category.id && styles.activeCategoryPill
            ]}
            onPress={() => setActiveCategory(category.id)}
          >
            <Text style={[
              styles.categoryPillText,
              activeCategory === category.id && styles.activeCategoryPillText
            ]}>
              {category.name}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Collections list */}
      <CollectionList 
        data={finalCollections} 
        title="✨ Your Collections" 
        style={styles.collectionList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Want to create a new collection?</Text>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>+ New Collection</Text>
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
  header: {
    padding: 25,
    paddingBottom: 30,
    backgroundColor: colors.lightPurple(0.2),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.purple(),
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fontType['Otf-MediumItalic'],
    color: colors.darkPink(),
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white(),
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.purple(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPurple(),
    fontSize: 16,
  },
  searchIcon: {
    backgroundColor: colors.pink(),
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.lightPurple(0.5),
  },
  activeAction: {
    backgroundColor: colors.pink(),
    borderColor: colors.pink(),
  },
  actionText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.darkPurple(),
    fontSize: 14,
    marginLeft: 5,
  },
  activeActionText: {
    color: colors.white(),
  },
  categoryPillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  categoryPill: {
    backgroundColor: colors.lightPurple(0.2),
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.lightPurple(0.3),
  },
  activeCategoryPill: {
    backgroundColor: colors.purple(),
    borderColor: colors.purple(),
  },
  categoryPillText: {
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPurple(),
    fontSize: 13,
  },
  activeCategoryPillText: {
    color: colors.white(),
  },
  collectionList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  footer: {
    padding: 25,
    backgroundColor: colors.lightPink(0.2),
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  footerText: {
    fontFamily: fontType['Otf-SemiBoldItalic'],
    color: colors.darkPurple(),
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: colors.pink(),
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 3,
  },
  footerButtonText: {
    fontFamily: fontType['Otf-Bold'],
    color: colors.white(),
    fontSize: 16,
  },
});

export default Collection;