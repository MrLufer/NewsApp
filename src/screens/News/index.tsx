import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import CardNews from '../../components/CardNews';
import useNews from '../../hooks/useNews';
import StyleNews from './style';

const News = () => {
  const {newsList, getNews} = useNews();
  const [textFilter, setTextFilter] = useState('');

  const newsListData = () => {
    if (textFilter === '') {
      return newsList;
    }
    return newsList.filter((news: any) => {
      return news.title.toLowerCase().includes(textFilter.toLowerCase());
    });
  };

  return (
    <SafeAreaView style={StyleNews.container}>
      <View style={StyleNews.header}>
        <Text style={StyleNews.title}>Minuto a minuto</Text>
        <TextInput
          style={StyleNews.textInput}
          placeholder="Buscar"
          onChangeText={setTextFilter}
          value={textFilter}
        />
      </View>

      <FlatList
        data={newsListData()}
        renderItem={({item}) => <CardNews news={item} />}
        onEndReached={getNews}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </SafeAreaView>
  );
};

export default News;
