import React from 'react'
import { ImageSourcePropType,Image,Text, View } from 'react-native';
import Row from './Row';
import { globalStyles } from '../styles';

interface Props {
    images:ImageSourcePropType[];
    count:number;
    task?:number;
}

const AvatarImageGroup : React.FC<Props> = ({images,count,task}) => {
  return (
    <Row>
        {images && images.length > 0 
            ? images.map((image, index) => {
                if(task){
                    if(index <= task - 1)  return (<Image key={index} source={image} style={[globalStyles.avatarImage,{marginLeft:index > 0 ? -10 : 0}]}  />)                                   
                }else{
                    return (<Image key={index} source={image} style={[globalStyles.avatarImage,{marginLeft:index > 0 ? -10 : 0}]}  />)
                }         
            })
            : (<></>)
        }
        {
            images && images.length > 0 && (
                <View style={[globalStyles.avatarImage,globalStyles.alignCenter,globalStyles.justifyCenter,{marginLeft:-10,backgroundColor:'rgba(0,0,0,0.5)'}]}>
                    <Text style={[globalStyles.text]}>{`+${count}`}</Text>
                </View>
                
            )
        }
    </Row>
  )
}

export default AvatarImageGroup