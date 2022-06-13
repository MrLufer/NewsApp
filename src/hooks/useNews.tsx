import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import React, {useEffect, useRef, useState} from 'react';
import typicodeApi from '../api/typicodeApi';

const useNews = () => {
  const [newsList, setNewsList] = useState([]);

  const user = useRef(1);

  const validateLimit = user.current <= 10;

  useEffect(() => {
    validateStorage();
  }, []);

  const validateStorage = async () => {
    const storageNews = await AsyncStorage.getItem('news');
    const storageId = await AsyncStorage.getItem('id');
    const storageDate = await AsyncStorage.getItem('date');

    if (storageDate && storageNews && storageId) {
      const date = dayjs(JSON.parse(storageDate));
      const now = dayjs();
      const diff = now.diff(date, 'minute');
      if (diff > 3) {
        await AsyncStorage.removeItem('news');
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('date');
        getNews();
      } else {
        setNewsList(JSON.parse(storageNews));
        user.current = parseInt(storageId);
      }
    } else {
      getNews();
    }
  };

  const saveNews = async (news, id) => {
    setNewsList(news);
    await AsyncStorage.setItem('news', JSON.stringify(news));
    await AsyncStorage.setItem('id', JSON.stringify(id));
    await AsyncStorage.setItem('date', JSON.stringify(dayjs()));
  };

  const getNews = async () => {
    if (validateLimit) {
      const res = await typicodeApi.get(`/users/${user.current}/posts`);
      console.log('a');
      user.current = user.current + 1;
      saveNews([...newsList, ...res.data], user.current);
    }
  };

  return {newsList, getNews};
};

export default useNews;
