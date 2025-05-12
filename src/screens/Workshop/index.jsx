import React, { useState, useEffect, useRef } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  ImageBackground, 
  Animated,
  Easing
} from 'react-native';
import { SearchNormal, Calendar, Filter, Star } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { WorkshopList } from '../../components';
import { workshops, workshopCategories } from '../../data';

const Workshop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('popular');
  
  // Animasi values
  const headerAnim = useRef(new Animated.Value(0)).current;
  const filterAnim = useRef(new Animated.Value(0)).current;
  const categoryAnim = useRef(new Animated.Value(0)).current;
  const footerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence animations
    Animated.sequence([
      // Header animation
      Animated.spring(headerAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      // Filters animation
      Animated.spring(filterAnim, {
        toValue: 1,
        delay: 200,
        tension: 30,
        friction: 8,
        useNativeDriver: true,
      }),
      // Categories animation
      Animated.spring(categoryAnim, {
        toValue: 1,
        delay: 300,
        tension: 30,
        friction: 7,
        useNativeDriver: true,
      }),
      // Footer animation
      Animated.spring(footerAnim, {
        toValue: 1,
        delay: 400,
        tension: 25,
        friction: 6,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const filteredWorkshops = workshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = activeCategory === 'all' 
    ? filteredWorkshops 
    : filteredWorkshops.filter(workshop => workshop.category === activeCategory);

  const sortedWorkshops = [...filteredByCategory].sort((a, b) => {
    if (activeFilter === 'popular') return b.rating - a.rating;
    if (activeFilter === 'price-low') return a.price - b.price;
    if (activeFilter === 'price-high') return b.price - a.price;
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <ScrollView style={styles.container}>
      {/* Header with animation */}
      <Animated.View style={{
        transform: [{
          translateY: headerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0]
          })
        }],
        opacity: headerAnim
      }}>
        <ImageBackground 
          source={{uri: 'https://img.freepik.com/free-photo/crumpled-paper-texture_1194-6500.jpg'}}
          style={styles.header}
          imageStyle={styles.headerBackground}
        >
          <View style={styles.headerContent}>
            <Animated.Text style={[styles.title, {
              transform: [{
                scale: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1]
                })
              }]
            }]}>
              Workshop Wonderland!
            </Animated.Text>
            
            <Animated.Text style={[styles.subtitle, {
              opacity: headerAnim,
              transform: [{
                translateY: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0]
                })
              }]
            }]}>
              Join our creative workshops and learn from the best
            </Animated.Text>
            
            {/* Search bar */}
            <Animated.View style={[styles.searchContainer, {
              transform: [{
                scale: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1]
                })
              }]
            }]}>
              <Animated.View style={[styles.searchIcon, {
                transform: [{
                  rotate: headerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['-30deg', '0deg']
                  })
                }]
              }]}>
                <SearchNormal size="20" color={colors.white()} variant="Bold" />
              </Animated.View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search workshops..."
                placeholderTextColor={colors.gray(0.7)}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </Animated.View>
          </View>
        </ImageBackground>
      </Animated.View>

      {/* Filter buttons with animation */}
      <Animated.ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        style={{
          transform: [{
            translateY: filterAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })
          }],
          opacity: filterAnim
        }}
      >
        {['popular', 'price-low', 'price-high', 'date'].map((filter, index) => (
          <Animated.View 
            key={filter}
            style={{
              transform: [{
                scale: filterAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.5, 1.1, 1]
                })
              }]
            }}
          >
            <Pressable 
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilter
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              {filter === 'popular' && (
                <Animated.View style={{
                  transform: [{
                    rotate: filterAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['-30deg', '0deg']
                    })
                  }]
                }}>
                  <Star size="18" color={activeFilter === filter ? colors.white() : colors.pink()} variant="Bold" />
                </Animated.View>
              )}
              {filter === 'date' && (
                <Animated.View style={{
                  transform: [{
                    rotate: filterAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['30deg', '0deg']
                    })
                  }]
                }}>
                  <Calendar size="18" color={activeFilter === filter ? colors.white() : colors.pink()} variant="Bold" />
                </Animated.View>
              )}
              <Text style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText
              ]}>
                {filter === 'popular' ? 'Popular' : 
                 filter === 'price-low' ? 'Price: Low to High' :
                 filter === 'price-high' ? 'Price: High to Low' : 'Date'}
              </Text>
            </Pressable>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      {/* Categories with animation */}
      <Animated.ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
        style={{
          transform: [{
            translateY: categoryAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })
          }],
          opacity: categoryAnim
        }}
      >
        {workshopCategories.map((category, index) => (
          <Animated.View
            key={category.id}
            style={{
              transform: [{
                scale: categoryAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.5, 1.1, 1]
                })
              }]
            }}
          >
            <Pressable 
              style={[
                styles.categoryButton,
                activeCategory === category.id && styles.activeCategory
              ]}
              onPress={() => setActiveCategory(category.id)}
            >
              <Text style={[
                styles.categoryText,
                activeCategory === category.id && styles.activeCategoryText
              ]}>
                {category.name}
              </Text>
            </Pressable>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      {/* Workshops list */}
      <WorkshopList 
        data={sortedWorkshops} 
        title="🎨 Featured Workshops" 
      />

      {/* Footer with animation */}
      <Animated.View style={[styles.footer, {
        transform: [{
          translateY: footerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0]
          })
        }],
        opacity: footerAnim
      }]}>
        <Text style={styles.footerText}>Can't find what you're looking for?</Text>
        <Animated.View style={{
          transform: [{
            scale: footerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1]
            })
          }]
        }}>
          <Pressable style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Request a Workshop</Text>
          </Pressable>
        </Animated.View>
        <Animated.Text style={[styles.copyright, {
          transform: [{
            rotate: footerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['-5deg', '0deg']
            })
          }]
        }]}>
          ✂️ TinkerTime Workshops © 2023 ✂️
        </Animated.Text>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPurple(0.1),
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
  headerContent: {
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.purple(),
    marginBottom: 5,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
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
  filterContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 3,
    shadowColor: colors.pink(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  activeFilter: {
    backgroundColor: colors.pink(),
  },
  filterText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.darkPurple(),
    fontSize: 14,
    marginLeft: 5,
  },
  activeFilterText: {
    color: colors.white(),
  },
  categoriesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: colors.lightPurple(0.3),
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: colors.purple(),
    transform: [{scale: 1.05}],
  },
  categoryText: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.darkPurple(),
    fontSize: 14,
  },
  activeCategoryText: {
    color: colors.white(),
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
    marginBottom: 15,
    elevation: 3,
  },
  footerButtonText: {
    fontFamily: fontType['Otf-Bold'],
    color: colors.white(),
    fontSize: 16,
  },
  copyright: {
    fontFamily: fontType['Otf-Medium'],
    color: colors.darkPink(),
    marginTop: 5,
    fontSize: 14,
  },
});

export default Workshop;