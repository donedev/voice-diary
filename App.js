/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Intro } from './src/pages';

function App(){
  return (
    <Intro/>
    // <Router>
    //   <Routes>
    //     {/* <Route element=" */}
    //     <Route path="/" element={<Intro/>} />
    //   </Routes>
    // </Router>
  )
}

export default App;
