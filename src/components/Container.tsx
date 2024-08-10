import React, { ReactNode } from 'react'
import { ScrollView, View } from 'react-native'
import {globalStyles} from '../styles'

interface Props {
    title?: string;
    back?:boolean;
    righ?:ReactNode;
    children:ReactNode;
}


const Container = (props:Props) => {

    const {title, back, righ,children} = props

  return (
   <ScrollView style={globalStyles.container}>
    {children}
   </ScrollView>
  )
}

export default Container