import React, { ReactNode, useState } from 'react'
import { View,Text, TouchableOpacity, TextInput, Alert, Button } from 'react-native'
import Container from '../components/Container';
import { colors, globalStyles, typography } from '../styles';
import Row from '../components/Row';
import Section from '../components/Section';
import { MaterialIcons,AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Cart from '../components/Cart';
import AvatarImageGroup from '../components/AvatarImageGroup';
import { avatarImage } from '../constants/data';

interface Props {
    children:ReactNode;
}

const HomeScreen = () => {

    const [search, setSearch] = useState('');
    const [fill, setFill] = useState(75); // Giá trị phần trăm
    const handleSearch = () => {
        Alert.alert(search)
    }
  return (
   <Container>
    <Section>
        <Row style={[{justifyContent:'space-between'}]}>
            <Text style={globalStyles.text} >
                <Ionicons name="grid-outline" size={24} color={colors.desc} />
            </Text>
            <Text style={globalStyles.text} >
                <Ionicons name="notifications-outline" size={24} color={colors.desc} />
            </Text>
        </Row>
    </Section>
    <Section>
        <Text style={globalStyles.text} >Hi!Duy Khanh</Text>
        <Text style={[globalStyles.text,globalStyles.title]} >Be Productive today</Text>
    </Section>
    <Section style={globalStyles.sectionContent}>
        <Row style={[{justifyContent:'space-between'}]}>
            <TextInput
                style={[globalStyles.text]}
                onChangeText={setSearch}
                value={search}
                placeholder="Search....."
                placeholderTextColor={colors.desc}
            />
            <TouchableOpacity onPress={handleSearch}>
                <Text style={globalStyles.text} >
                    <Ionicons name="search" size={24} color={colors.desc}  />
                </Text>
            </TouchableOpacity>
        </Row>    
    </Section>


    <Section style={globalStyles.sectionContent}>
        <Row>
            <View style={{flex:1}}>
                <Text style={[globalStyles.text,globalStyles.title,{marginBottom:10}]} >Task progress</Text>
                <Text style={[globalStyles.text,{marginBottom:10}]} >30/40 tasks done</Text>
                <TouchableOpacity style={[globalStyles.btn,globalStyles.alignCenter]}>               
                    <Text style={globalStyles.text} >Match 22</Text>
                </TouchableOpacity>              
            </View>
            <View>
                <AnimatedCircularProgress
                    size={100} // Kích thước hình tròn
                    width={10} // Độ dày của thanh tiến trình
                    fill={fill} // Giá trị phần trăm
                    tintColor={colors.blue}  // Màu của thanh tiến trình
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" // Màu nền của thanh tiến trình
                    lineCap="round" // Đầu tròn cho thanh tiến trình
                    >
                    {(percentage) => (
                      <Text style={[globalStyles.text,globalStyles.title,{textAlign:'center'}]}>
                        {`${Math.round(percentage)}%`} {/* Hiển thị phần trăm bên trong */}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
            </View>
        </Row>    
    </Section>
    <Section style={[globalStyles.sectionContent,{padding:0,backgroundColor:'transparent'}]}>
        <Row>
            <View style={{flex:1,height:'100%',marginRight:10}}>
                <Cart imageSource={require('../../assets/images/f.png')}>  
                    <TouchableOpacity style={[globalStyles.btn,globalStyles.alignCenter,globalStyles.btnRound,{marginBottom:10}]}>               
                        <AntDesign name="edit" size={24} color={colors.test} />
                    </TouchableOpacity>      
                    <Text style={[globalStyles.text,globalStyles.title,{marginBottom:10}]} >US Design</Text>      
                    <AvatarImageGroup images={avatarImage} count={10} task={3} />           
                </Cart>              
            </View>
            <View style={{flex:1,height:'100%'}}>          
                <Cart imageSource={require('../../assets/images/f.png')} overlayStyles={{backgroundColor:'rgba(33,150,243,0.9)'}} styles={{marginBottom:10}}>          
                    <TouchableOpacity style={[globalStyles.btn,globalStyles.alignCenter,globalStyles.btnRound,{marginBottom:10}]}>               
                        <AntDesign name="edit" size={24} color={colors.test} />
                    </TouchableOpacity>      
                    <Text style={[globalStyles.text,globalStyles.title,{marginBottom:10}]} >API Payment</Text>  
                    <AvatarImageGroup images={avatarImage} count={7} task={2} />         
                </Cart>
                <Cart imageSource={require('../../assets/images/f.png')} overlayStyles={{backgroundColor:'rgba(18,181,22,0.9)'}}>          
                    <TouchableOpacity style={[globalStyles.btn,globalStyles.alignCenter,globalStyles.btnRound,{marginBottom:10}]}>               
                        <AntDesign name="edit" size={24} color={colors.test} />
                    </TouchableOpacity>      
                    <Text style={[globalStyles.text,globalStyles.title,{marginBottom:10}]} >Update work</Text>         
                </Cart>
            </View>
        </Row>          
    </Section>
    <Text style={globalStyles.text} >Text</Text>
    <Text style={globalStyles.text} >Text</Text>
   </Container>
  )
}

export default HomeScreen