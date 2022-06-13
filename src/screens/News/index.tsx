import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import CardNews from '../../components/CardNews';
import useNews from '../../hooks/useNews';
import StyleNews from './style';

const News = () => {
  const {newsList, getNews} = useNews();

  return (
    <SafeAreaView style={StyleNews.container}>
      <View>
        <Text style={StyleNews.title}>Minuto a minuto</Text>
      </View>

      <FlatList
        data={newsList}
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
