import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  const [diamonds, setDiamonds] = useState(0);
  const user = auth().currentUser;

  useEffect(() => {
    if (user) {
      const subscriber = firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          const userData = documentSnapshot.data();
          if (userData && userData.hasOwnProperty('diamonds')) {
            setDiamonds(userData.diamonds);
          }
        });
  
      // Unsubscribe from events when no longer needed
      return () => subscriber();
    }
  }, [user]);

  const reduceDiamonds = async () => {
    const userRef = firestore().collection('users').doc(user.uid);
  
    userRef.get().then((doc) => {
      if (doc.exists) {
        userRef.update({
          diamonds: diamonds - 10,
        });
      } else {
        // Belge mevcut değilse bir tane oluşturabilirsiniz
        userRef.set({
          diamonds: 90,  // Veya başka bir başlangıç değeri
        });
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  };

  return (
    <View>
      <Text>Diamonds: {diamonds}</Text>
      <Button title="Use 10 Diamonds" onPress={reduceDiamonds} />
    </View>
  );
};

export default HomeScreen;
