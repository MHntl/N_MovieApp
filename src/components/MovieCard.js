import {TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
const {width, height} = Dimensions.get('window');

const MovieCard = ({movie}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppScreens.Movie, {id: movie.id})}>
      <Image
        className="rounded-3xl"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
