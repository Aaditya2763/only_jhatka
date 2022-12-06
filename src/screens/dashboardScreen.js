import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//importing components
import Location from '../components/locationbox/location';
import SearchBar from '../components/searchbar/searchbar';
import {Color} from '../constants/style/style';
import Carousel from '../components/Carousel/carousel';
import HeaderTitle from '../constants/ui/title/headerTitle';
import ProductItem from '../components/Product/productItem';
import BottomNavBar from '../components/Bottom Navbar/BottonNavBar';

const Data = [
  'https://w7.pngwing.com/pngs/12/41/png-transparent-mettwurst-raw-meat-graphy-goat-meat-meat-food-beef-recipe-thumbnail.png',
  'https://w7.pngwing.com/pngs/10/986/png-transparent-meat-organic-food-bacon-ribs-meat-food-beef-roast-beef-thumbnail.png',
  'https://w7.pngwing.com/pngs/994/971/png-transparent-raw-meat-illustration-sausage-chicken-meat-poultry-beef-chicken-food-baking-recipe-thumbnail.png',
  'https://w7.pngwing.com/pngs/10/986/png-transparent-meat-organic-food-bacon-ribs-meat-food-beef-roast-beef.png',
];

const DashboardScreen = () => {
  //    console.log(JSON.stringify(data));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <View>
          <Location />
          <SearchBar />
          <HeaderTitle title={'Top Picks'} style={styles.Header} />
          <Carousel data={Data} />
        </View>
        
      </View>
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },
  Header: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 8,
  },
});

export default DashboardScreen;
