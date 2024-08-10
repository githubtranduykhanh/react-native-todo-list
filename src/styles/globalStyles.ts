import { Platform, StyleSheet } from 'react-native';
import colors from './colors';
import typography from './typography';
import spacing from './spacing';


const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding:16,
      paddingTop: Platform.OS === 'ios' ? 40  : 32,   
      backgroundColor: colors.bgColor,
    },
    text:{
        color:colors.desc,
        fontSize:typography.fontSizeSmall,
        fontFamily:typography.fontFamily.regular
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
    }
    
    // ...
  });
  
  export default globalStyles;