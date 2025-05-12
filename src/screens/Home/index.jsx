import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Animated, Easing } from 'react-native';
import { SearchNormal, MagicStar, Happyemoji, Brush2 } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { ListHorizontal } from '../../components';
import { categories, blogList } from '../../data';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Animasi values
  const titleAnim = useRef(new Animated.Value(0)).current;
  const searchAnim = useRef(new Animated.Value(0)).current;
  const categoryAnim = useRef(new Animated.Value(0)).current;
  const footerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence animations
    Animated.sequence([
      // Title animation
      Animated.timing(titleAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      }),
      // Search animation
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      // Categories animation
      Animated.timing(categoryAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      // Footer animation
      Animated.timing(footerAnim, {
        toValue: 1,
        duration: 400,
        delay: 200,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const filteredBlogs = blogList.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = activeCategory 
    ? filteredBlogs.filter(blog => blog.category === activeCategory)
    : filteredBlogs;

  return (
    <ScrollView style={styles.container}>
      {/* Header with animations */}
      <ImageBackground 
        source={{uri: 'https://img.freepik.com/free-photo/crumpled-paper-texture_1194-6500.jpg'}}
        style={styles.header}
        imageStyle={styles.headerBackground}
      >
        <Animated.View style={[styles.titleContainer, {
          transform: [{
            scale: titleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1]
            })
          }],
          opacity: titleAnim
        }]}>
          <Text style={styles.title}>TinkerTime!</Text>
          <Animated.View style={{
            transform: [{
              rotate: titleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['-30deg', '0deg']
              })
            }]
          }}>
            <MagicStar size="24" color={colors.pink()} variant="Bold" />
          </Animated.View>
        </Animated.View>

        <Animated.Text style={[styles.subtitle, {
          opacity: titleAnim,
          transform: [{
            translateY: titleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 0]
            })
          }]
        }]}>
          Let's Build & Create Something Amazing!
        </Animated.Text>
        
        {/* Animated search bar */}
        <Animated.View style={[styles.searchContainer, {
          opacity: searchAnim,
          transform: [{
            translateY: searchAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0]
            })
          }]
        }]}>
          <Animated.View style={[styles.searchIcon, {
            transform: [{
              scale: searchAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.5, 1.1, 1]
              })
            }]
          }]}>
            <SearchNormal size="20" color={colors.white()} variant="Bold" />
          </Animated.View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for craft ideas..."
            placeholderTextColor={colors.gray(0.7)}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Animated.View style={{
            transform: [{
              rotate: searchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['30deg', '0deg']
              })
            }]
          }}>
            <Pressable style={styles.emojiButton}>
              <Happyemoji size="24" color={colors.yellow()} variant="Bold" />
            </Pressable>
          </Animated.View>
        </Animated.View>
      </ImageBackground>

      {/* Animated categories */}
      <Animated.ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
        style={{
          opacity: categoryAnim,
          transform: [{
            translateY: categoryAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })
          }]
        }}
      >
        {categories.map((category, index) => (
          <Animated.View 
            key={category.id}
            style={{
              opacity: categoryAnim,
              transform: [{
                translateX: categoryAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [index % 2 === 0 ? -50 : 50, 0]
                })
              }]
            }}
          >
            <Pressable 
              style={[
                styles.categoryButton,
                activeCategory === category.id && styles.activeCategory
              ]}
              onPress={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <Animated.View style={[styles.categoryIcon, {
                transform: [{
                  rotate: categoryAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['90deg', '0deg']
                  })
                }]
              }]}>
                <Brush2 size="18" color={colors.white()} variant="Bold" />
              </Animated.View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </Pressable>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      {/* Projects section */}
      <ListHorizontal 
        data={filteredByCategory} 
        title="✨ Today's Crafty Ideas ✨" 
      />

      {/* Animated footer */}
      <Animated.View style={[styles.footer, {
        opacity: footerAnim,
        transform: [{
          translateY: footerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0]
          })
        }]
      }]}>
        <Animated.View style={[styles.footerDecoration, {
          transform: [{
            scaleX: footerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            })
          }]
        }]} />
        
        <Animated.Text style={[styles.footerText, {
          opacity: footerAnim,
          transform: [{
            scale: footerAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0.8, 1.1, 1]
            })
          }]
        }]}>
          Let's Get Crafty! ✂️🧵
        </Animated.Text>
        
        <Animated.View style={{
          transform: [{
            scale: footerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1]
            })
          }]
        }}>
          <Pressable style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Share Your Creation</Text>
          </Pressable>
          
          <Pressable style={[styles.footerButton, styles.specialButton]}>
            <Text style={styles.footerButtonText}>Ask for Craft Help</Text>
          </Pressable>
        </Animated.View>
        
        <Animated.Text style={[styles.copyright, {
          opacity: footerAnim,
          transform: [{
            rotate: footerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['-5deg', '0deg']
            })
          }]
        }]}>
          🎀 TinkerTime © 2023 🎀
        </Animated.Text>
      </Animated.View>
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