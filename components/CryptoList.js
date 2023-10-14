/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setCryptoData} from '../actions/counterActions';
import {fetchCryptoData} from '../actions/counterActions';
import {cryptoStyles} from '../styles/screenStyles';
import SwipeableItem from '../SwipeableItem';

const CryptoList = () => {
  const dispatch = useDispatch();
  const cryptoData = useSelector(state => state.cryptoData);
  const refreshing = useSelector(state => state.refreshing);

  useEffect(() => {
    dispatch(fetchCryptoData()); // Trigger the saga
  }, [dispatch]);

  // const fetchData = () => {
  //   axios
  //     .get('https://api.coingecko.com/api/v3/coins/markets', {
  //       params: {
  //         vs_currency: 'inr',
  //         order: 'name',
  //         per_page: 100,
  //         page: 1,
  //         sparkline: false,
  //       },
  //     })
  //     .then(response => {
  //       dispatch(setCryptoData(response.data));
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onRefresh = () => {
    dispatch(fetchCryptoData());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 100 Cryptocurrencies by Market Cap</Text>
      <FlatList
        data={cryptoData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.currency}>Symbol: {item.symbol}</Text>
              <Text style={styles.currency}>Name: {item.name}</Text>
              <Text style={styles.rate}>
                Price in INR: {item.current_price}
              </Text>

              <Text style={styles.rate}>
                Price Change (24h): {item.price_change_24h}
              </Text>
            </View>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
const styles = cryptoStyles;

export default CryptoList;
