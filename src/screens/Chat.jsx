import {View, StyleSheet, ImageBackground, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Chat = () => {
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const uniqueId = route.params.id + route.params.data.userId;


  useEffect(() => { 
    const fetchMessages = async () => {
      try {
        console.log('Fetching initial messages...');
        const snapshot = await firestore()
          .collection('chats')
          .doc(uniqueId)
          .collection('messages')
          .orderBy('createdAt', 'desc')
          .get();

        const allMessages = snapshot.docs.map(item => {
          return { ...item._data, createdAt: item._data.createdAt };
        });
        setMessageList(allMessages);
      } catch (error) {
        console.error("Error fetching initial messages:", error);
      } finally {
        setIsLoading(false); // Set loading to false after initial fetch
      }
    };

    fetchMessages();

    const subscriber = firestore()
      .collection('chats')
      .doc(uniqueId)
      .collection('messages')
      .orderBy('createdAt', 'desc');
    subscriber.onSnapshot(querysnapshot => {
      console.log('Updating messages in real-time...');
      const newMessages = querysnapshot.docs.map(item => {
        return { ...item._data, createdAt: item._data.createdAt };
      });
      setMessageList(newMessages);
    });

    return () => subscriber; 
  }, []); 

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessageList(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
  }, []);

  return (
    <View style={styles.mainScreen}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background.png')}>
          {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
        <GiftedChat
          renderAvatar={null}
          messages={messageList}
          onSend={messages => onSend(messages)}
          user={{
            _id: route.params.id,
          }}
          textInputStyle={styles.messageBox}
        />)}
      </ImageBackground>
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#031525',
    color: 'black',
  },
  messageBox: {
    backgroundColor: 'white',
    color: 'black',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
