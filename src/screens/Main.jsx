import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import generateColorFromInitial from '../Components/randomColorGenerator';
let id = '';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const [userIcon,setuserIcon] = useState('A');
  const [name,setName] = useState('Anonymous');
  const [email,setEmail] = useState('anonymous@email.com')


  useEffect(() => {
    getUsers();
    updateUserInfo();
  }, []);

  const getUsers = async () => {
    id = await AsyncStorage.getItem('USERID');
    let tempData = [];
    const email = await AsyncStorage.getItem('EMAIL');
    setEmail(email);
    firestore()
      .collection('Users')
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs != []) {
          res.docs.map(item => {
            tempData.push(item.data());
          });
        }
        setUsers(tempData);
      });
  };

  const updateUserInfo =  async()=>{
    const name = String(await AsyncStorage.getItem('NAME'));
    setName(name);
    setuserIcon(name.substring(0,1));
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: 'white'}
      ]}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <Pressable style={[styles.profileIcon, {marginRight:'5%'}]} onPress={()=> navigation.navigate('Profile', {name:name,email:email,userIcon:userIcon})} >
          <Text style={[styles.ProfileText]}>{userIcon}</Text>
        </Pressable>
      </View>
      <FlatList
        data={users}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[styles.userItem]}
              onPress={() => {
                navigation.navigate('Chat', {data: item, id: id});
              }}>
             <View style={[styles.profileIcon, { backgroundColor: generateColorFromInitial(String(item.name.charAt(0))) }]}>
              <Text style={styles.userIconText}>{String(item.name).substring(0,2).toUpperCase()}</Text>
             </View>
              <Text style={styles.name}>{String(item.name)}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Users;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection:'row',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  title: {
    color: 'green',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: '5%',
  },
  userItem: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 0.2,
    borderTopWidth: 0,
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  profileIcon:{
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:40,
    height:40,
    borderRadius:20
  },
  ProfileText:{
    fontSize:20,
  },

  userIconText:{
    color: 'white', // or a suitable contrasting color
    fontWeight: 'bold',
  },
  name: {color: 'black', marginLeft: 20, fontSize: 20},
});
