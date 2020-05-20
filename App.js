import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'column',
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    this.fetchArticles(URL);
  }
  fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      this.setState({ articles: response.data.articles });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
            />)}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}


