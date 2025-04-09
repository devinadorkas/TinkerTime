import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {SearchNormal} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {ListHorizontal, ItemSmall} from '../../components';
import {CategoryList, BlogList} from '../../data';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogList.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TinkerTime!</Text>
        <Text style={styles.subtitle}>Build, Create, Inspire Your DIY Journey</Text>
        <View style={styles.searchContainer}>
          <SearchNormal size="20" color={colors.deepBlue()} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for projects..."
            placeholderTextColor={colors.deepBlue(0.5)}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.section}>
        {categories.map(category => (
          <Pressable key={category.id} style={styles.categoryButton}>
            <Text style={styles.sectionTitle}>{category.name}</Text>
          </Pressable>
        ))}
      </View>

      <ListHorizontal 
        data={filteredBlogs} 
        title="Find some TinkerTime tutorials →" 
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>COPY/2022    01:50</Text>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Post another tutorial</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Ask Carmela a question</Text>
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
    padding: 20,
    backgroundColor: colors.lightBlue(),
  },
  title: {
    fontSize: 30,
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.deepBlue(),
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkBlue(),
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fontType['Otf-Regular'],
    color: colors.deepBlue(),
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: colors.lightBlue(0.2),
  },
  sectionTitle: {
    fontFamily: fontType['Otf-SemiBold'],
    color: colors.darkBlue(),
  },
  footer: {
    padding: 20,
    backgroundColor: colors.lightBlue(0.2),
    alignItems: 'center',
  },
  footerText: {
    fontFamily: fontType['Otf-Regular'],
    color: colors.darkBlue(),
  },
  footerButton: {
    backgroundColor: colors.mediumBlue(),
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  footerButtonText: {
    fontFamily: fontType['Otf-Medium'],
    color: colors.deepBlue(),
  },
});

export default App;