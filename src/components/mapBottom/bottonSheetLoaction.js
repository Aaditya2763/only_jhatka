import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Color} from '../../constants/style/style';
// icons
import loactionIcon from '../../assets/icons/loactionIcon.png';
import AddressIcon from '../../assets/icons/addressIcon.png';

const BottomSheetLoaction = ({refRbButton}) => {
  return (
    <RBSheet
      ref={refRbButton}
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
      height={235}>
      {/* code start here  */}
      <View style={styles.container}>
        <Text style={styles.textStyle}>Set Delivery Location</Text>

        <View style={styles.listContiner}>
          <Image source={loactionIcon} style={styles.iconStyle} />
          <Pressable
            onPress={() => console.log('pressed')}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.listText}>Use Current Location</Text>
          </Pressable>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.listContiner}>
          <Image source={AddressIcon} style={styles.iconStyle} />
          <Pressable
            onPress={() => console.log('pressed')}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.listText2}>Add Address</Text>
            <Text style={styles.smallText}>Enter your address</Text>
          </Pressable>
        </View>
      </View>
    </RBSheet>
  );
};

export default BottomSheetLoaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContiner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'center',
    marginVertical: 11,
  },
  iconStyle: {
    width: 44,
    height: 44,
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
  listText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Color.dark,
    marginTop: 7,
    fontWeight: '500',
  },
  horizontalLine: {
    borderWidth: 0.3,
    color: '#2D2D2D',
    marginHorizontal: 28,
    opacity: 0.2,
  },
  listText2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Color.dark,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    color: Color.dark,
    fontWeight: '400',
  },
  pressed: {
    opacity: 0.75,
  },
});
