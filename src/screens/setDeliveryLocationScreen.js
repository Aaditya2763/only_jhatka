import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import BottomSheetLoaction from '../components/mapBottom/bottonSheetLoaction';
import {Color} from '../constants/style/style';
// import BottomSheet from '../constants/ui/bottomSheet/bottom';

const SetDelveryLoactionScreen = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.subContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <Text>mapView</Text>
        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => refRBSheet.current.open()}
        />
        <BottomSheetLoaction refRbButton={refRBSheet} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: Color.dark,
  },
});
export default SetDelveryLoactionScreen;
