import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {View, Image, Text, Button } from 'react-native';

const MenuItem = ({nama, harga, gambar, onTambahPesanan}) => {
    const [qty, setQty] = useState(0);

    const tambahMenu = () => {
        setQty(qty + 1);
        onTambahPesanan();
    }

    return (
        <View style={styles.card}>
            <Image
                source={typeof gambar === 'string' ? { uri: gambar } : gambar}
                resizeMode="cover"
                style = {styles.gambar}
            />

            <View>
                <Text style={styles.namaMenu}>{nama}</Text>
                <Text>Rp {harga.toLocaleString('id-ID')}</Text>
                <Text>Jumlah Pesanan: {qty}</Text>

                <Button title="Tambah" onPress={tambahMenu} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        width: '48%',
        borderWidth: 1,
        borderColor: '#EAE4F4',
        borderRadius: 16,
        marginBottom: 14,
        overflow: 'hidden'
    },
    gambar: {
        width: '100%',
        height: 115,
        backgroundColor: '#F5F0FF',
    },
    namaMenu: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8868c9',
    },
})
export default MenuItem;