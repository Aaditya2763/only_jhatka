//import liraries
import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import DashboardScreen from '../dashboardScreen';
import {Color} from '../../constants/style/style';
import {Categories} from '../../constants/models/categores/categories';
import SelectButton from '../../constants/ui/button/selectButton';
import ProductItem from '../../components/Product/productItem';
import {ProductList} from '../../constants/models/categores/product';
import Title from '../../constants/ui/title/title';
//redux components
import {useSelector} from 'react-redux';
import {allproducts} from '../../redux/products/productsSlice';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// create a component
const Home = () => {
  const product = useSelector(allproducts);

  return (
    <SafeAreaView style={styles.SafeAreaViewConianer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      <View style={styles.container}>
        <View style={styles.subConatiner}>
          <Title title={'Categories'} />
        </View>
      </View>
      <View>
        <DashboardScreen />

        <Title title={'Categories'} style={styles.heading} />

        <View>
          <FlatList
            data={Categories}
            horizontal={true}
            style={styles.CategoriesStyle}
            renderItem={({item}) => (
              <SelectButton
                CategorieTitle={item.title}
                CategoriesImage={item.image}
              />
            )}
          />
        </View>
        <View>
          <FlatList
            data={product}
            // numColumns={2}
            horizontal={true}
            style={styles.product}
            renderItem={({item}) => (
              <ProductItem
                image={item.image}
                price={item.price}
                point={item.point}
                title={item.title}
                weight={item.weight}
                style={styles.productImage}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  SafeAreaViewConianer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
  },

  subConatiner: {
    justifyContent: 'center',
    backgroundColor: Color.white,
  },

  heading: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: responsiveFontSize(3),
    lineHeight: 30,
    width: 200,
    // height: 30,
    textAlign: 'left',
    paddingLeft: responsiveScreenWidth(2.66),
    marginTop: responsiveScreenHeight(-1),
  },
  text: {
    color: 'black',
  },

  CategoriesStyle: {
    marginTop: -100,
    height: 80,
    backgroundColor: Color.white,
  },
  product: {
    marginTop: -20,
    marginLeft: 8,
    height: 220,
    backgroundColor: Color.white,
  },
  productImage: {
    width: 160,
  },
});

//make this component available to the app
export default Home;
