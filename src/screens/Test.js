import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const DATA = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
  { id: '6', text: 'Item 6' },
  { id: '7', text: 'Item 7' },
  { id: '8', text: 'Item 8' },
];

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{text}</Text>
  </View>
);

const TwoColumnFlatList = () => {
  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    return (
      <View style={ index % 2 == 0 ? styles.item : styles.item2}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    )
  };

  console.log(width,'-',height) ;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#cce5ff',
    marginRight: 5,
    marginBottom: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    flex: 1,
    backgroundColor: '#cce5ff',
    marginLeft: 5,
    marginBottom: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default TwoColumnFlatList;
