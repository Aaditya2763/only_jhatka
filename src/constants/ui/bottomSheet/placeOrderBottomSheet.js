//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Color} from '../../style/style';
import SmallPrimaryButton from '../button/smallPrimaryButton';

// create a component
const PlaceOrderBottomSheet = ({refRbButton}) => {
  return (
    <RBSheet
      ref={refRbButton}
      closeOnDragDown={false}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          elevation: 10,
          shadowOffset: {height: 0, width: 2},
          shadowColor: Color.dark,
        },
      }}
      height={77}>
      {/* code start here  */}
      <View style={{marginVertical: 20}}>
        <View style={styles.buttonContainer}>
          <Text style={styles.ratePriceText}> Rs.570 </Text>
          <SmallPrimaryButton
            buttonTitle={'Place Order'}
            onPress={() => console.log('place Order')}
          />
        </View>
      </View>
    </RBSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  ratePriceText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 24,
    color: Color.dark,
  },
});

//make this component available to the app
export default PlaceOrderBottomSheet;
