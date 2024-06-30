import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Kontak({ gambar, nama, telpon, onPress }) {
    return (
        <View style={styles.container}>
            <Image source={gambar} style={styles.img} />
            <View style={styles.teks}>
                <Text style={styles.nama}>{nama}</Text>
                <Text style={styles.telp}>{telpon}</Text>
                <Button title="Lihat detail" onPress={onPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'blue',
        marginBottom: 10,
    },
    img: {
        margin: 15,
        width: 75,
        height: 75,
        borderRadius: 75,
    },
    teks: {
        flex: 1,
    },
    nama: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    telp: {
        fontSize: 14,
        color: '#3498db',
    },
});
