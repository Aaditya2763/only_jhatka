//import liraries
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { Categories } from '../../constants/models/categores/categories';
import { Color } from '../../constants/style/style';
import SelectButton from '../../constants/ui/button/selectButton';

// create a component
const ButtonCategories
 = () => {
  return (
    <FlatList
      horizontal={true}
      data={Categories}
      renderItem={({item}) => (
        <View style={styles.container}>
            
          <SelectButton
            CategorieTitle={item.title}
            CategoriesImage={item.image}
         
          />
        </View>
      )}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:-10,
  },
  AllButton: {
    width: 56.33,
    height: 34.49,
    borderRadius: 34.49,
    backgroundColor: Color.primaryColor,
    
  },
  button:{
    height:40,    
    
  }
});

//make this component available to the app
export default ButtonCategories;
