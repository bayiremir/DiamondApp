import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('./../assets/background.png')} style={styles.backgroundImage}>
            <View >
                <Text style={{textAlign:"center", fontSize: 25, fontWeight:"bold", marginTop: 50}}>Hoşgeldiniz</Text>
            </View>
            <View style={styles.background}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>Go To Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    buttonContainer: {
        marginBottom: 20,
        marginLeft: 20,
    },
    button: {
        backgroundColor: 'aqua',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default SplashScreen;
