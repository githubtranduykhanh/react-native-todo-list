import React, { ReactNode, useState } from 'react'
import { View,Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import Container from '../components/Container';
import { colors, globalStyles, typography } from '../styles';
import Row from '../components/Row';
import Section from '../components/Section';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

interface Props {
    children:ReactNode;
}

const HomeScreen = () => {

    const [search, setSearch] = useState('');

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
   
    <Text style={globalStyles.text} >Text</Text>
    <Text style={globalStyles.text} >Text</Text>
   </Container>
  )
}

export default HomeScreen