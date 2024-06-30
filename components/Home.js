import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Kontak from './Kontak';

const Home = ({ navigation }) => {
    const friends = [
        { gambar: require('../assets/arman.jpg'), 
        nama: 'Arman Surahman', 
        telpon: '+62 858-6403-7350', 
        email: 'armansurahman928@ummi.ac.id', 
        alamat: 'Kp. Cikareo, Kec. Cikembar, Kab. Sukabumi', 
        tgl_lahir: '28 September 2003' },

        { gambar: require('../assets/azril.jpg'), 
        nama: 'Muhammad Azril Alfarizi', 
        telpon: '+62 813-8230-1081', 
        email: 'djil21@gmail.com', 
        alamat: 'Sukabumi Kp panjalu rt 13/03', 
        tgl_lahir: '31 Desember 2003' },

        { gambar: require('../assets/faisal.jpg'), 
        nama: 'Faisal Triaputra', 
        telpon: '+62 812-8023-0924', 
        email: 'faisal.artupairt28@gmail.com', 
        alamat: 'Jl. Pasir Makmur ', 
        tgl_lahir: ' 28 Maret 2004' },

        { gambar: require('../assets/radit.jpg'), 
        nama: 'Raditya Bagja Saputra', 
        telpon: '+62 895-1475-0080', 
        email: 'radityabagjasaputra045@ummi.ac.id', 
        alamat: 'Jl. Caringin Ngumbang, Benteng Kp. Cibarongbok No. 10', 
        tgl_lahir: '10 September 2003' },

        { gambar: require('../assets/raihan.jpg'), 
        nama: 'Raihan Aulia Rahman', 
        telpon: '+62 838-1801-5271', 
        email: 'raihanar75@gmail.com', 
        alamat: 'kp. Cikujang Kel. Dayeuhluhur Kec. Warudoyong ', 
        tgl_lahir: ' 25 Oktober 2003' }
    ];

    return (
        <ScrollView style={styles.container}>
            {friends.map((friend, index) => (
                <Kontak
                    key={index}
                    gambar={friend.gambar}
                    nama={friend.nama}
                    telpon={friend.telpon}
                    onPress={() => navigation.navigate('Detail', friend)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});

export default Home;
