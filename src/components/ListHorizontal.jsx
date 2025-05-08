import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {fontType, colors} from '../theme';
import ItemSmall from './ItemSmall';

const ListHorizontal = ({data, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemSmall item={item} />}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Otf-Bold'],
    color: colors.deepBlue(),
    marginBottom: 10,
  },
  listContent: {
    gap: 10,
  },
});

export default ListHorizontal;