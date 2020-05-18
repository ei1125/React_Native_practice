import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/Listitem';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'colum',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/id/10/200/200" 
        title="In the following example, the nested title and 
        body text will inherit the fontFamily from styles.baseText, 
        but the title provides its own additional styles. The title 
        and body will stack on top of each other on account of the 
        literal newlines:"
        author="SampleNews" />
    </View>
  );
}



