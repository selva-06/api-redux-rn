import {StyleSheet} from 'react-native';

export const cryptoStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    padding: 8,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  currency: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  rightActionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: 'red',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  rightActionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
