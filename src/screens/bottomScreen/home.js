//import liraries
import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import DashboardScreen from '../dashboardScreen';
import {Color} from '../../constants/style/style';
import {Categories} from '../../constants/models/categores/categories';
import SelectButton from '../../constants/ui/button/selectButton';
import ProductItem from '../../components/Product/productItem';
import {ProductList} from '../../constants/models/categores/product';
import HeaderTitle from '../../constants/ui/title/headerTitle';
//redux components
import {useSelector} from 'react-redux';
import {allproducts} from '../../redux/products/productsSlice';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

// create a component
const Home = () => {
  const navigation=useNavigation();
  const product = useSelector(allproducts);

  return (
    <SafeAreaView style={styles.SafeAreaViewConianer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      
      <View style={styles.container}  >
        <View style={styles.subConatiner}>
          {/* <Title title={'Categories'} /> */}
        </View>
      </View>
      <View>
        <DashboardScreen />
        <HeaderTitle title={'Categories'} style={styles.heading} />
        <View style={styles.horizontalBtn}>
          <FlatList
            data={Categories}
            horizontal={true}
            style={styles.CategoriesStyle}
            renderItem={({item}) => (
              <SelectButton
                CategorieTitle={item.title}
                CategoriesImage={item.image}
                onPress={() => navigation.navigate('Items')}
              />
            )}
          />
        </View>
        <View>
          <FlatList
            data={product}
            numColumns={2}
            horizontal={false}
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
    fontWeight: '500',
    fontSize: responsiveFontSize(2.5),
    lineHeight: 30,
    width: 200,
    height: 40,
    color:"black",
    textAlign: 'left',
    paddingLeft: responsiveScreenWidth(2.66),
    marginTop: responsiveScreenHeight(-0.5),
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
  horizontalBtn:{
    marginTop: 85,
   
  }
});

//make this component available to the app
export default Home;
