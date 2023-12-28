import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const BackAndFavorite = ({isAbsolute}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={isAbsolute && {width: width * 0.92}}
      className={`flex-row justify-between items-center mx-4 z-20 ${
        isAbsolute && 'absolute'
      }`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-1 rounded-xl"
        style={{backgroundColor: '#eab308'}}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavorite;
