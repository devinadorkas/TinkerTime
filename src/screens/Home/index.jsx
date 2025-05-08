import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Pressable, ImageBackground} from 'react-native';
import {SearchNormal, MagicStar, Happyemoji, Brush2} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {ListHorizontal} from '../../components';
import {categories, blogList} from '../../data';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredBlogs = blogList.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = activeCategory 
    ? filteredBlogs.filter(blog => blog.category === activeCategory)
    : filteredBlogs;

  return (
    <ScrollView style={styles.container}>
      {/* Header with craft paper background */}
        <ImageBackground 
            source={{uri: 'https://img.freepik.com/free-photo/crumpled-paper-texture_1194-6500.jpg'}}
            style={styles.header}
            imageStyle={styles.headerBackground}
        >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TinkerTime!</Text>
          <MagicStar size="24" color={colors.pink()} variant="Bold" />
        </View>
        <Text style={styles.subtitle}>Let's Build & Create Something Amazing!</Text>
        
        {/* Search with cute icon */}
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <SearchNormal size="20" color={colors.white()} variant="Bold" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for craft ideas..."
            placeholderTextColor={colors.gray(0.7)}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.emojiButton}>
            <Happyemoji size="24" color={colors.yellow()} variant="Bold" />
          </Pressable>
        </View>
      </ImageBackground>

      {/* Categories as colorful buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <Pressable 
            key={category.id} 
            style={[
              styles.categoryButton,
              activeCategory === category.id && styles.activeCategory
            ]}
            onPress={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
          >
            <View style={styles.categoryIcon}>
              <Brush2 size="18" color={colors.white()} variant="Bold" />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Projects section */}
      <ListHorizontal 
        data={filteredByCategory} 
        title="✨ Today's Crafty Ideas ✨" 
      />

      {/* Footer with craft elements */}
      <View style={styles.footer}>
        <View style={styles.footerDecoration} />
        <Text style={styles.footerText}>Let's Get Crafty! ✂️🧵</Text>
        
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Share Your Creation</Text>
        </Pressable>
        
        <Pressable style={[styles.footerButton, styles.specialButton]}>
          <Text style={styles.footerButtonText}>Ask for Craft Help</Text>
        </Pressable>
        
        <Text style={styles.copyright}>🎀 TinkerTime © 2023 🎀</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightYellow(0.3),
  },
  header: {
    padding: 25,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerBackground: {
    opacity: 0.9,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.purple(),
    marginRight: 10,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fontType['Otf-SemiBoldItalic'],
    color: colors.darkPink(),
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    elevation: 5,
    shadowColor: colors.pink(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  searchIcon: {
    backgroundColor: colors.pink(),
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPurple(),
    fontSize: 16,
  },
  emojiButton: {
    marginLeft: 10,
  },
  categoriesContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue(),
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 3,
  },
  activeCategory: {
    backgroundColor: colors.pink(),
    transform: [{scale: 1.05}],
  },
  categoryIcon: {
    backgroundColor: colors.white(0.3),
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  categoryText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.white(),
    fontSize: 14,
  },
  footer: {
    padding: 25,
    backgroundColor: colors.lightPurple(0.2),
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  footerDecoration: {
    width: 50,
    height: 5,
    backgroundColor: colors.pink(),
    borderRadius: 5,
    marginBottom: 15,
  },
  footerText: {
    fontFamily: fontType['Otf-SemiBoldItalic'],
    color: colors.darkPurple(),
    fontSize: 16,
    marginBottom: 15,
  },
  footerButton: {
    backgroundColor: colors.pink(),
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  specialButton: {
    backgroundColor: colors.purple(),
  },
  footerButtonText: {
    fontFamily: fontType['Otf-Bold'],
    color: colors.white(),
    fontSize: 16,
  },
  copyright: {
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPink(),
    marginTop: 10,
    fontSize: 14,
  },
});

export default Home;