// /* eslint-disable react-hooks/exhaustive-deps */
// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   RefreshControl,
//   TouchableOpacity,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import axios from 'axios';
// import {setCryptoData} from '../actions/counterActions';
// import {fetchCryptoData} from '../actions/counterActions';
// import {removeCryptoItem} from '../actions/counterActions';
// import {cryptoStyles} from '../styles/screenStyles';
// import {Swipeable} from 'react-native-gesture-handler';
// const CryptoList = () => {
//   const dispatch = useDispatch();
//   const cryptoData = useSelector(state => state.cryptoData);
//   const refreshing = useSelector(state => state.refreshing);

//   // useEffect(() => {
//   //   dispatch(fetchCryptoData()); // Trigger the saga
//   // }, [dispatch]);

//   // const fetchData = () => {
//   //   axios
//   //     .get('https://api.coingecko.com/api/v3/coins/markets', {
//   //       params: {
//   //         vs_currency: 'inr',
//   //         order: 'name',
//   //         per_page: 100,
//   //         page: 1,
//   //         sparkline: false,
//   //       },
//   //     })
//   //     .then(response => {
//   //       dispatch(setCryptoData(response.data));
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);
//   const handleFetchData = () => {
//     dispatch(setCryptoData());
//   };
//   const onRefresh = () => {
//     dispatch(setCryptoData());
//   };
//   const handleDelete = id => {
//     dispatch(removeCryptoItem(id)); // Dispatch the action to remove the item
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Top 100 Cryptocurrencies by Market Cap</Text>
//       <TouchableOpacity onPress={handleFetchData}>
//         <Text>Fetch Crypto Data</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={cryptoData}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <Swipeable
//             renderRightActions={() => (
//               <TouchableOpacity onPress={() => handleDelete(item.id)}>
//                 <View>
//                   <Text>Delete</Text>
//                 </View>
//               </TouchableOpacity>
//             )}>
//             <View style={styles.itemContainer}>
//               <View style={styles.infoContainer}>
//                 <Text style={styles.currency}>Symbol: {item.symbol}</Text>
//                 <Text style={styles.currency}>Name: {item.name}</Text>
//                 <Text style={styles.rate}>
//                   Price in INR: {item.current_price}
//                 </Text>

//                 <Text style={styles.rate}>
//                   Price Change (24h): {item.price_change_24h}
//                 </Text>
//               </View>
//               <Image source={{uri: item.image}} style={styles.image} />
//             </View>
//           </Swipeable>
//         )}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       />
//     </View>
//   );
// };
// const styles = cryptoStyles;

// export default CryptoList;
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'; // Added Image import
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../actions/counterActions';
import {cryptoStyles} from '../styles/screenStyles';
import {removeCryptoItem} from '../actions/counterActions';
import {Swipeable} from 'react-native-gesture-handler';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const error = useSelector(state => state.error);
  const refreshing = useSelector(state => state.refreshing);
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);
  const handleDelete = id => {
    dispatch(removeCryptoItem(id)); // Dispatch the action to remove the item
  };
  const onRefresh = () => {
    dispatch(fetchData());
  };
  return (
    <View style={cryptoStyles.container}>
      <Text style={cryptoStyles.title}>
        Top 100 Cryptocurrencies by Market Cap
      </Text>
      <Button title="Refresh Data" onPress={() => dispatch(fetchData())} />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Swipeable
            renderRightActions={() => (
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <View>
                  <Text>Delete</Text>
                </View>
              </TouchableOpacity>
            )}>
            <View style={cryptoStyles.itemContainer}>
              <View style={cryptoStyles.infoContainer}>
                <Text style={cryptoStyles.currency}>Symbol: {item.symbol}</Text>
                <Text style={cryptoStyles.currency}>Name: {item.name}</Text>
                <Text style={cryptoStyles.rate}>
                  Price in INR: {item.current_price}
                </Text>
                <Text style={cryptoStyles.rate}>
                  Price Change (24h): {item.price_change_24h}
                </Text>
              </View>
              <Image source={{uri: item.image}} style={cryptoStyles.image} />
            </View>
          </Swipeable>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default App;
