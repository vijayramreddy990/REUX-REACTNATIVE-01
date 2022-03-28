/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return questions ? (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>
          Imagine this is a real cool question
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Cool Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('Result');
          }}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    flex: 1,
  },
  top: {
    paddingVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#1A759F',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
    color: 'black',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});

export default Quiz;
