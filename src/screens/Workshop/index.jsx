import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Pressable, ImageBackground} from 'react-native';
import {SearchNormal, Calendar, Filter, Star} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {WorkshopList} from '../../components';
import {workshops, workshopCategories} from '../../data';

const Workshop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('popular');

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
      {/* Header with craft paper background */}
      <ImageBackground 
        source={{uri: 'https://img.freepik.com/free-photo/crumpled-paper-texture_1194-6500.jpg'}}
        style={styles.header}
        imageStyle={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <Text style={styles.title}>Workshop Wonderland!</Text>
          <Text style={styles.subtitle}>Join our creative workshops and learn from the best</Text>
          
          {/* Search bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <SearchNormal size="20" color={colors.white()} variant="Bold" />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search workshops..."
              placeholderTextColor={colors.gray(0.7)}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Filter buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        <Pressable 
          style={[
            styles.filterButton,
            activeFilter === 'popular' && styles.activeFilter
          ]}
          onPress={() => setActiveFilter('popular')}
        >
          <Star size="18" color={activeFilter === 'popular' ? colors.white() : colors.pink()} variant="Bold" />
          <Text style={[
            styles.filterText,
            activeFilter === 'popular' && styles.activeFilterText
          ]}>Popular</Text>
        </Pressable>
        
        <Pressable 
          style={[
            styles.filterButton,
            activeFilter === 'price-low' && styles.activeFilter
          ]}
          onPress={() => setActiveFilter('price-low')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'price-low' && styles.activeFilterText
          ]}>Price: Low to High</Text>
        </Pressable>
        
        <Pressable 
          style={[
            styles.filterButton,
            activeFilter === 'price-high' && styles.activeFilter
          ]}
          onPress={() => setActiveFilter('price-high')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'price-high' && styles.activeFilterText
          ]}>Price: High to Low</Text>
        </Pressable>
        
        <Pressable 
          style={[
            styles.filterButton,
            activeFilter === 'date' && styles.activeFilter
          ]}
          onPress={() => setActiveFilter('date')}
        >
          <Calendar size="18" color={activeFilter === 'date' ? colors.white() : colors.pink()} variant="Bold" />
          <Text style={[
            styles.filterText,
            activeFilter === 'date' && styles.activeFilterText
          ]}>Date</Text>
        </Pressable>
      </ScrollView>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {workshopCategories.map(category => (
          <Pressable 
            key={category.id} 
            style={[
              styles.categoryButton,
              activeCategory === category.id && styles.activeCategory
            ]}
            onPress={() => setActiveCategory(category.id)}
          >
            <Text style={[
              styles.categoryText,
              activeCategory === category.id && styles.activeCategoryText
            ]}>{category.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Workshops list */}
      <WorkshopList 
        data={sortedWorkshops} 
        title="🎨 Featured Workshops" 
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Can't find what you're looking for?</Text>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Request a Workshop</Text>
        </Pressable>
        <Text style={styles.copyright}>✂️ TinkerTime Workshops © 2023 ✂️</Text>
      </View>
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