import { Platform, StyleSheet } from 'react-native';
import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import {StatusBar} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding:16,     
      backgroundColor: colors.bgColor,
      paddingTop:0     
    },
    text:{
        color:colors.desc,
        fontSize:typography.fontSizeSmall,
        fontFamily:typography.fontFamily.regular,   
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
       marginBottom:16,
      
    },
    sectionContent:{
        padding:20,
        backgroundColor:colors.gray,
        borderRadius:15
    },   
    title:{
        fontSize:typography.fontSizeMedium,
        fontFamily:typography.fontFamily.semiBold
    },
    safeAreaView:{
        flex:1,
        backgroundColor:colors.bgColor
    },
    btn:{
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:colors.blue,
        color:colors.test,
        borderRadius:15,
        alignSelf: 'flex-start'
    },
    justifyCenter:{
        justifyContent:'center'
    },
    alignCenter:{
        alignItems:'center'
    },
    cart:{
        borderRadius:15,
        flex:1,
        position:'relative',
        overflow:'hidden',
        padding:10
    },
    overlay:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(113,77,217,0.9)'
    },
    btnRound:{
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:100,
        backgroundColor:'rgba(0,0,0,0.2)',     
    },
    avatarImage:{
        borderRadius:100,
        width:40,
        height:40,
        borderWidth:2,
        borderColor:colors.while,     
    }
    // ...
  });
  
  export default globalStyles;