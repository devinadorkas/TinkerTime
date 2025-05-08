import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {fontType, colors} from '../theme';
import WorkshopCard from '../components/WorkshopCard';

const WorkshopList = ({data, title}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <WorkshopCard 
            data={item} 
            onPress={() => console.log('Workshop selected:', item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 25,
  },
  listTitle: {
    fontFamily: fontType['Otf-ExtraBold'],
    color: colors.purple(),
    fontSize: 22,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 20,
  },
});

export default WorkshopList;