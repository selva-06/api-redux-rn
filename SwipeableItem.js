// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Alert,
//   Image,
// } from 'react-native';
// import {Swipeable} from 'react-native-gesture-handler';
// import {useDispatch} from 'react-redux';
// import {deleteCryptoItem} from './actions/counterActions';
// import {cryptoStyles} from './styles/screenStyles';
// const SwipeableItem = ({item}) => {
//   const dispatch = useDispatch();

//   const handleDelete = id => {
//     dispatch(deleteCryptoItem(id));
//   };

//   const rightActions = (dragX, item) => {
//     const onDelete = () => {
//       Alert.alert(
//         'Delete Confirmation',
//         `Are you sure you want to delete item with ID ${item.id}?`,
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Delete',
//             onPress: () => handleDelete(item.id),
//             style: 'destructive',
//           },
//         ],
//       );
//     };

//     return (
//       <View style={styles.rightActionContainer}>
//         <TouchableOpacity onPress={onDelete}>
//           <Text style={styles.rightActionText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, item)}>
//       <View style={styles.itemContainer}>
//         <View style={styles.infoContainer}>
//           <Text style={styles.currency}>Symbol: {item.symbol}</Text>
//           <Text style={styles.currency}>Name: {item.name}</Text>
//           <Text style={styles.rate}>Price in INR: {item.current_price}</Text>
//           <Text style={styles.rate}>
//             Price Change (24h): {item.price_change_24h}
//           </Text>
//         </View>
//         <Image source={{uri: item.image}} style={styles.image} />
//       </View>
//     </Swipeable>
//   );
// };

// const styles = cryptoStyles;

// export default SwipeableItem;
