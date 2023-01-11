//import liraries
import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import AddaddressBottom from '../../constants/ui/bottomSheet/addAdrdressBottom';

// create a component
const AddaddressMapSceen = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => refRBSheet.current.open()}
        />
        <AddaddressBottom refRbSheet={refRBSheet}/>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default AddaddressMapSceen;
