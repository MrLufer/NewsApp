import React from 'react';
import {View, Text} from 'react-native';
import StyleCard from './style';

interface INews {
  title: string;
  body: string;
  userId: number;
}

interface IProps {
  news: INews;
}

const CardNews = ({news}: IProps) => {
  return (
    <View style={StyleCard.container}>
      <Text style={StyleCard.title}>{news.title}</Text>
      <Text>{news.body}</Text>
      <View style={StyleCard.containerChip}>
        <Text style={StyleCard.textChip}>Usuario {news.userId}</Text>
      </View>
    </View>
  );
};

export default CardNews;
