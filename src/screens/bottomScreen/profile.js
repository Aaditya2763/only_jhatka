//import liraries
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Color} from '../../constants/style/style';
import DelvearyLocationBottomSheet from '../../constants/ui/bottomSheet/delvearyLocationBottomsheet';
import TimeBottomSheet from '../../constants/ui/bottomSheet/timeBottomSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import PlaceOrderBottomSheet from '../../constants/ui/bottomSheet/placeOrderBottomSheet';

// create a component
const Profile = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => this[RBSheet + refRBSheet].open()}
      /> */}
      {/* <DelvearyLocationBottomSheet refRbSheet={refRBSheet} /> */}

      {/* <TimeBottomSheet openBottomSheet={refRBSheet} /> */}
      <PlaceOrderBottomSheet refRbButton={refRBSheet} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  text: {
    color: 'black',
  },
});

//make this component available to the app
export default Profile;
