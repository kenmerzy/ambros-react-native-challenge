/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { Button } from './components';
import { responsive } from './utils';
import { readFile, writeFile, DocumentDirectoryPath, exists } from 'react-native-fs';
// const { readFile, writeFile } = require('fs');

const App = () => {

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);


  const handleReadFile = async () => {
    const filePath = DocumentDirectoryPath + 'a.txt';
    exists(filePath).then(() => {
      setLoading(true);
      readFile(filePath, 'utf8').then((value) => {
        setContent(value);
      });
      setLoading(false);
    });
  };

  const handleWriteFile = async () => {
    const filePath = DocumentDirectoryPath + 'a.txt';
    exists(filePath).then(() => {
      setLoading(true);
      writeFile(filePath, content, 'utf8');
      setLoading(false);

    });
  };


  const onChangeText = (value: string) => {
    setContent(value);
  };

  return (
    <View style={styles.container} >
      <Text>Android Challenge</Text>
      {loading && <ActivityIndicator size="large" hidesWhenStopped={true} />}
      <TextInput value={content} onChangeText={onChangeText} textAlignVertical="top" multiline style={styles.textInput} />
      <View style={styles.row}>
        <Button title="Read" onPress={handleReadFile} style={styles.buttonRead} />
        <Button title="Write" onPress={handleWriteFile} style={styles.buttonWrite} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsive(20),
    backgroundColor: '#f0d87d',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsive(20),
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    marginTop: responsive(20),
    minHeight: responsive(150),
  },
  buttonRead: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive(150),
    height: responsive(50),
  },
  buttonWrite: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive(150),
    height: responsive(50),
  },
});

export default App;
