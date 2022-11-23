import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Color} from '../../style/style';

const BottomSheet = ({refRBSheet, childern}) => {
  return (
    <RBSheet
      ref={refRBSheet}
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
      {childern}
    </RBSheet>
  );
};

export default BottomSheet;
