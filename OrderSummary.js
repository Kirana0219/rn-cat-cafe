import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  const diskon = totalCount >= 5;

  return (
    <View style={styles.container}>
        <Text style={styles.judul}>Ringkasan Pesanan</Text>
        <Text style={styles.totalMenu}>Jumlah Pesanan : {totalCount} item</Text>

        {diskon && (
            <Text style={styles.promoText}>
            🎉 Selamat! Anda Mendapatkan Diskon 10%
            </Text>
        )}

        <TouchableOpacity
            style={styles.tombol}
            onPress={() => {}}
            activeOpacity={0.8}
        >
            <Text style={styles.teksTombol}> Pesan Sekarang </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 50,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderTopWidth: 1,
    borderTopColor: '#EEE8F8',
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#292333',
    marginBottom: 12,
  },
  totalMenu: {
    fontSize: 15,
    color: '#77717E',
  },
  promoText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2da85c',
    marginTop: 12,
  },
  tombol: {
    backgroundColor: '#6C3FC5',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 14,
  },
  teksTombol: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderSummary;