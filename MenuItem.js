import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {View, Image, Text } from 'react-native';

const MenuItem = ({nama, harga, gambar, onTambahPesanan, onKurangiPesanan}) => {
    const [qty, setQty] = useState(0);

    const tambahMenu = () => {
        setQty(jumlah => jumlah + 1);
        onTambahPesanan();
    }
    const kurangiMenu = () => {
        if(qty > 0){
            setQty(jumlah => jumlah - 1)
            onKurangiPesanan();
        }
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
                <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
            </View>

            <View style={styles.kontrolPesanan}>
                <TouchableOpacity style={styles.tombolKurang} onPress={kurangiMenu} activeOpacity={0.8}>
                    <Text style={styles.textKurang}>-</Text>
                </TouchableOpacity>

                <Text style={styles.jumlahPesanan}>{qty}</Text>

                <TouchableOpacity style={styles.tombolTambah} onPress={tambahMenu} activeOpacity={0.8}>
                     <Text style={styles.textTambah}>+</Text>
                </TouchableOpacity>
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
        borderRadius: 14,
        marginBottom: 12,
        overflow: 'hidden'
    },
    gambar: {
        width: '100%',
        height: 115,
        backgroundColor: '#F5F0FF'
    },
    namaMenu: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8868c9',
        paddingHorizontal: 8
    },
    harga: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8
    },
    kontrolPesanan: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 14,
        marginTop: 12,
        justifyContent: 'flex-end',
        paddingHorizontal: 6
    },
    tombolTambah: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#8868c9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTambah: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24
    },
    tombolKurang: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#8868c9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textKurang: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24
    },
    jumlahPesanan: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
export default MenuItem;