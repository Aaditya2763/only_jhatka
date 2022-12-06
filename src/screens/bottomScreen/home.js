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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Title title={'Categories'} />
        </View>
        <View>
          <FlatList
            data={Categories}
            horizontal={true}
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
            renderItem={({item}) => (
              <ProductItem
                image={item.image}
                price={item.price}
                point={item.point}
                title={item.title}
                weight={item.weight}
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
  text: {
    color: 'black',
  },
  CategoriesStyle: {},
});

//make this component available to the app
export default Home;
