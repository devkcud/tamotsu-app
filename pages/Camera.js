import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
const Scanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);          

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
  
    if (hasPermission === null) {
        return <View><Text>Solicitando permissão...</Text></View>;
    }

    if (!hasPermission) {
        return <View><Text>Sem permissão para acessar a câmera</Text></View>;
    }


    return (
                    
            <View style={{ height: "100%", backgroundColor: '', }}>
                <View style={{ height: 120, borderBottomRightRadius: 70, borderBottomLeftRadius: 70, backgroundColor: "white", zIndex: 50, flexDirection: 'row', position: "relative", alignItems: "center" }}>                    
                    <Text style={{ textAlign: "center", position: "absolute", alignSelf: "center", width: "100%" }}>Jacques, DESCULPA O ATRASO, EU ESQUECIIIIIIIIIIIIIIIIIIII 😭😭😭😭😭</Text>
                </View>
                <CameraView                                        
                    style={{ ...StyleSheet.absoluteFillObject, height: "100vh", zIndex: 40 }}
                />                
            </View>        
    );
};


const localstyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22        

    },
    modalView: {
        margin: 20,
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 500,
        backgroundColor: '#ccc',
    },
});

export default Scanner;
