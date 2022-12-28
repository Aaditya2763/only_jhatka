//import liraries
import React from 'react';
import {
  View,
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
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      <View style={styles.container}>
        <View style={styles.subConatiner}>
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
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
  },
  subConatiner: {
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

//make this component available to the app
export default Home;
