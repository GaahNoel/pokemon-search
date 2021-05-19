import React from 'react';
import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return <Routes/>;
}

