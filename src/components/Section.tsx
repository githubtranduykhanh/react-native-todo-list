import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../styles';

interface Props {
    style?: StyleProp<ViewStyle>;
    children:ReactNode;
}


const Section = (props:Props) => {

    const {children,style} = props
  return (
    <View style={[globalStyles.section,style]}>
        {children}
    </View>
  )
}

export default Section