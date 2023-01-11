import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Color} from '../../style/style';
import loactionIcon from '../../../assets/icons/loactionIcon.png';
// import SmallPrimaryButton from '../button/smallPrimaryButton';
import PrimaryButton from '../button/primaryButton';

const AddaddressBottom = ({refRbSheet}) => {
  return (
    <RBSheet
      ref={refRbSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#2D2D2D',
          opacity: 0.2,
          width: 60,
        },
        container: {
          elevation: 10,
          shadowOffset: {height: 0, width: 2},
          shadowColor: Color.dark,
        },
      }}
      height={214}>
      {/* code start here  */}
      <View style={styles.container}>
        <Text style={styles.textStyle}>Add Delivery Location</Text>

        <View style={styles.listContiner}>
          <Image source={loactionIcon} style={styles.iconStyle} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Pressable
              onPress={() => console.log('pressed')}
              style={({pressed}) => pressed && styles.pressed}>
              <Text style={styles.listText}>Delivery Address | 35 mins</Text>
              <Text style={styles.smallText}>Lorem ipsum dolor amet...</Text>
            </Pressable>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <PrimaryButton buttonTitle={'Confirm'} />
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  textColor: {
    color: 'black',
  },
  iconStyle: {
    width: 45,
    height: 45,
    marginLeft: 28,
    marginRight: 25,
  },
  textStyle: {
    fontSize: 20,
    color: Color.primaryColor,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    marginLeft: 28,
  },
  listContiner: {
    flexDirection: 'row',
    textAlign: 'center',
    marginVertical: 11,
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Color.dark,
    marginTop: 7,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    color: Color.dark,
    fontWeight: '400',
  },
  horizontalLine: {
    borderWidth: 0.3,
    color: '#2D2D2D',
    marginHorizontal: 28,
    opacity: 0.2,
  },
  buttonStyle: {
    width: 154,
    height: 38,
  },
  ratePriceText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 24,
    color: Color.dark,
  },
});

export default AddaddressBottom;
