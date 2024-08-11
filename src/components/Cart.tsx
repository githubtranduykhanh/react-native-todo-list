import React, { ReactNode } from 'react'
import { ImageBackground, ImageSourcePropType, ImageStyle, StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../styles';

interface Props {
    imageSource: ImageSourcePropType; // Định nghĩa kiểu dữ liệu cho prop imageSource
    styles?: StyleProp<ImageStyle>; // Kiểu dữ liệu cho prop style
    children: ReactNode;
    overlayStyles?: StyleProp<ViewStyle>
}



const Cart = (props: Props) => {
    const { imageSource, styles, children,overlayStyles } = props
    return (
        <ImageBackground source={imageSource} resizeMode="cover" style={[globalStyles.cart,styles]}>
            <View style={[globalStyles.overlay,overlayStyles]}/>                       
            {children}
        </ImageBackground>
    )
}

export default Cart