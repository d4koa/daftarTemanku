import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function Detail({ route, navigation }) {
    const { gambar, nama, telpon, email, alamat, tgl_lahir } = route.params;

    return (
        <View style={styles.container}>
            <Image source={gambar} style={styles.img} />
            <Text style={styles.nama}>{nama}</Text>
            <Text style={styles.telp}>{telpon}</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Email: </Text>
                <Text style={styles.value}>{email}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Alamat: </Text>
                <Text style={styles.value}>{alamat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Tanggal Lahir: </Text>
                <Text style={styles.value}>{tgl_lahir}</Text>
            </View>

            <Button title="Back to Home" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    nama: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    telp: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#3498db',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    value: {
        textAlign: 'center',
        fontSize: 12,
        flexShrink: 1,
    },
});
