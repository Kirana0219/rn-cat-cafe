import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';

import MenuItem from './MenuItem';

const DAFTAR_MENU = [ 
  { id: '1', 
    nama: 'Kopi Susu Catnip', 
    harga: 20000,
    gambar: require('./assets/kopi-susu.png'),
  }, 
  { id: '2', 
    nama: 'Matcha Paw Latte', 
    harga: 25000,
    gambar: require('./assets/matcha.png'),
  }, 
  { id: '3', 
    nama: 'Croissant Ikan Tuna', 
    harga: 18000,
    gambar: require('./assets/croissant.png'), 
  }, 
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahPesanan = (harga) => {
    setTotalPesanan(totalPesanan + harga);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textSapaan}>Hallo! Cat Lovers</Text>
        <Text style={styles.textWelcome}>Selamat Datang di Cat Cafe!</Text>
        <Text style={styles.subText}>Yuk, pilih menu favoritmu hari ini!</Text>
      </View>

      <Text style={styles.labelMenu}>Our Menu</Text>

      <View style={styles.daftarMenu}>
        {DAFTAR_MENU.map(item => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            gambar={item.gambar}
            onTambahPesanan={tambahPesanan}
          />  
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    paddingTop: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
  },
  textSapaan: {
    fontSize: 18,
    color: '#a183db',
    fontWeight: 600,
  },
  textWelcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#292333',
  },
  subText: {
    fontSize: 14,
    color: '#88838F',
    marginTop: 4,
  },
  daftarMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  labelMenu: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 8,
  }
});
export default App;

