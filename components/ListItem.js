import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer} >
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://picsum.photos/id/10/200/200'}}
        />
      </View>
      <View style={styles.rightContainer} >
        <Text numberOfLines={3} style={styles.text}>
        In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:
        </Text>
        <Text style={styles.subtext}>
          React News
        </Text>
      </View>
    </View>
  )
}

export default ListItem;