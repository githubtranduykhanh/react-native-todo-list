import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../styles';



interface Props {
    style?: StyleProp<ViewStyle>;
    children:ReactNode;
}


const Row = (props:Props) => {
    const {children,style} = props
  return (
    <View style={[globalStyles.row, style]}>
        {children}
    </View>
  )
}

export default Row