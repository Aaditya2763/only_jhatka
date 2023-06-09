//import liraries
import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../style/style';
// import CheckBox from '@react-native-community/checkbox';

// create a component
const TimeBottomSheet = ({openBottomSheet}) => {
  const [QuntityShow, setQuntityShow] = useState(false);
  const [AddOneShow, setAddOnesShow] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(toggleCheckBox);
  return (
    <RBSheet
      ref={ref => {
        this[RBSheet + openBottomSheet] = ref;
      }}
      closeOnPressMask={false}
      animationType={'slide'}
      closeOnPressBack={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          elevation: 10,
          shadowOffset: {height: 0, width: 2},
          shadowColor: Color.dark,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
      height={445}>
      {/* component code is here */}
      <View style={styles.container}>
        <View style={styles.hederstyle}>
          <Text style={styles.headerTitle}>Pick slot for delivery</Text>
          <Icon
            name="md-close-circle-sharp"
            size={24}
            color={Color.dark}
            onPress={() => this[RBSheet + openBottomSheet].close()}
          />
        </View>
        <View style={styles.Horizontaldivider} />
        {/* horzontal line */}
        <View style={styles.row}>
          <View style={styles.LeftSide}>
            <View>
              <Pressable onPress={() => setQuntityShow(true)}>
                <View style={styles.chooseButton}>
                  <View style={QuntityShow ? styles.navBorder : null} />
                  <Text style={QuntityShow ? styles.pressed : styles.unPressed}>
                    Today
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setAddOnesShow(false)}>
                <View style={styles.chooseButton}>
                  <View style={AddOneShow ? styles.navBorder : null} />
                  <Text style={AddOneShow ? styles.pressed : styles.unPressed}>
                    Tomorrow
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* left side column */}
          <View style={styles.VerticalDivider} />
          <View style={styles.Column}>
            {/**line two */}
            <View style={styles.Column}>
              {/* checkbox component */}
              {QuntityShow ? (
                <View style={styles.MarginLeftAddOne}>
                  {/* component */}
                  <Text style={styles.AddOneHeaderText}>Pick your Slots</Text>
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      Today 35 min
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      6 AM - 8 AM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      8 AM - 10 AM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      10 AM - 12 AM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      12 AM - 2 PM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      2 PM - 4 PM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      4 PM - 6 PM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                  {/* start :  Time CheckBox component */}
                  <View style={styles.AddOneRow}>
                    {/* <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                    /> */}
                    <Text
                      style={
                        toggleCheckBox
                          ? styles.checkBoxPressdText
                          : styles.checkBoxUnPressdText
                      }>
                      6 PM - 8 PM
                    </Text>
                  </View>
                  {/*  End : column addones */}
                </View>
              ) : null}
              {/* Add ones componnets is here */}
              {AddOneShow ? (
                <View style={styles.MarginLeftAddOne}>
                  {/* component */}
                  <Text style={styles.AddOneHeaderText}>Add Ons (0/3)</Text>
                  <View style={styles.AddOneRow}>
                    <Text style={styles.AddOneText}>Recipe packet 1</Text>
                    <View style={styles.AddOneRow}>
                      <Text style={styles.AddOneText}>Rs.20</Text>
                      {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                        tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                      /> */}
                    </View>
                  </View>
                  <View style={styles.Column}>
                    {/* column Add ones */}
                    <View
                      // start : row
                      style={styles.AddOneRow}>
                      <Text style={styles.AddOneText}>Readymade masala</Text>
                      <View style={styles.AddOneRow}>
                        <Text style={styles.AddOneText}>Rs.20</Text>
                        {/* <CheckBox
                          disabled={false}
                          value={toggleCheckBox}
                          onValueChange={newValue =>
                            setToggleCheckBox(newValue)
                          }
                          tintColors={{true: '#F7A399', false: '#2D2D2D'}}
                        /> */}
                      </View>
                    </View>
                    {/* End :  row */}
                  </View>
                  {/*  End : column addones */}

                  {/* end component */}
                </View>
              ) : null}

              {/* colunm */}
            </View>
          </View>
        </View>
      </View>
      {/* component code end here */}
    </RBSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  Column: {
    flexDirection: 'column',
  },
  LeftSide: {
    width: '30%',
    flexDirection: 'column',
  },
  chooseButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  QuntityButton: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AddOneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AddOneRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  AddOneText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: Color.dark,
  },
  AddOneHeaderText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: Color.dark,
    fontFamily: 'Poppins-Meddium',
    marginLeft: 5,
  },
  MarginLeftAddOne: {
    marginLeft: 13,
  },

  Horizontaldivider: {
    borderWidth: 0.5,
    width: '100%',
    // backgroundColor: Color.dark,
    opacity: 0.3,
    marginTop: '10%',
  },
  VerticalDivider: {
    flexDirection: 'column',
    height: 400,
    borderRightWidth: 1,
    opacity: 0.3,
  },
  hederstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    top: '5%',
    marginHorizontal: 15,
  },
  headerTitle: {
    color: Color.dark,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 18,
  },
  pressed: {
    color: Color.primaryColor,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins-Meddium',
  },
  unPressed: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Meddium',
    color: Color.dark,
    lineHeight: 24,
    marginLeft: 18,
    opacity: 0.5,
  },
  navBorder: {
    width: 5,
    height: 30,
    backgroundColor: Color.primaryColor,
    justifyContent: 'flex-start',
    marginRight: 11,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  checkBoxPressdText: {
    color: Color.primaryColor,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Poppins-Meddium',
  },
  checkBoxUnPressdText: {
    color: Color.dark,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Poppins-Meddium',
    textAlign: 'right',
  },
});

//make this component available to the app
export default TimeBottomSheet;
