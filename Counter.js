// Counter.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/counterActions';

const Counter = ({count, increment, decrement}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
