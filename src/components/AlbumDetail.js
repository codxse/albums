import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album: { title, artist, thumbnail_image, image } }) => {
  const {
    thumbnail,
    thumbnailContainer,
    imageStyle,
    headerContainer,
    headerTitle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContainer}>
          <Text style={headerTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 0
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
