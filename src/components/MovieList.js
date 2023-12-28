import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {fallbackMoviePoster} from '../api';

const MovieList = ({title, data, hideSeeAll}) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  return (
    <View className=" my-4 space-y-4">
      <View className="flex-row mx-4 justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-[#eab308] text-lg">See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        horizontal
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(AppScreens.Movie, {id: item.id})
            }>
            <View className="mr-4 space-y-2">
              <Image
                className="rounded-3xl"
                source={{
                  uri:
                    `https://image.tmdb.org/t/p/w500${item.poster_path}` ||
                    fallbackMoviePoster,
                }}
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                }}
              />
              <Text className="text-neutral-300 ml-1">
                {item.title.length > 14
                  ? item.title.slice(0, 14) + '...'
                  : item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieList;
