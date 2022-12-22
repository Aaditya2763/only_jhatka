//import liraries
import {
  TabActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
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

// create a component
const Home = () => {
  const isFocused = useIsFocused();
  const naviagtion = useNavigation();
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"white"}} >
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      <View >
<DashboardScreen/>
       
      <Title title={'Categories'}  style={styles.heading}/>
        
        <View>
          <FlatList
            data={Categories}
            horizontal={true}
            style={styles. CategoriesStyle}
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
            data={ProductList}
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
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
  },
  heading:{
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    width:200,
    height:30,
    textAlign: 'left',
    paddingLeft: 10,
    marginTop:-15,
  },
  text: {
    color: 'black',
  },
  CategoriesStyle: {
    marginTop:-20,
    height:80,
  },
  product:{
    marginTop:-20,
  marginLeft:8,
    height:220,

  },
  productImage:{
   width:160, 
  }
});

//make this component available to the app
export default Home;
