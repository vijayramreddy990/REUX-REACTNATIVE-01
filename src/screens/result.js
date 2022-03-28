/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.banner}
          source={require('../../images/banner.png')}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});

export default Result;
