import React, { useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import MenuItem from './MenuItem';
import OrderSummary from './OrderSummary';

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

  const tambahPesanan = () => {
    setTotalPesanan(total => total + 1);
  };

  const kurangiPesanan = () => {
    setTotalPesanan(total => total - 1)
  }

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.textSapaan}>Hallo! Cat Lovers</Text>
        <Text style={styles.textWelcome}>Selamat Datang di Cat Cafe!</Text>
        <Text style={styles.subText}>Yuk, pilih menu kesukaanmu!</Text>
      </View>

       <View style={styles.banner}>
          <Image
            source={require('./assets/banner.jpg')}
            style={styles.gambarBanner}
            resizeMode="cover"
          />

          <View style={styles.lapisanBanner}>
            <Text style={styles.promoLabel}>
              SPECIAL PROMO
            </Text>

            <Text style={styles.promoJudul}>
              Happy Paws, Happy Day!
            </Text>

            <Text style={styles.promoDeskripsi}>
              Pesan 5 menu favoritmu dan dapatkan diskon 10%
            </Text>
          </View>
        </View>

      <Text style={styles.labelMenu}>Daftar Menu</Text>

      <View style={styles.daftarMenu}>
        {DAFTAR_MENU.map(item => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            gambar={item.gambar}
            onTambahPesanan={tambahPesanan}
            onKurangiPesanan={kurangiPesanan}
          />  
        ))}
      </View>
      </ScrollView>
        
        <OrderSummary totalCount={totalPesanan}/>

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    paddingTop: 30,
  },
  scrollContent:{
    paddingBottom: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#292333',
  },
  subText: {
    fontSize: 14,
    color: '#88838F',
    marginTop: 4,
  },
 banner: {
    height: 120,
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 22,
    overflow: 'hidden',
  },
  gambarBanner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.6,
  },
  lapisanBanner: {
    flex: 1,
    backgroundColor: '#DCCAFFCC',
    padding: 18,
    justifyContent: 'center',
  },
  promoLabel: {
    fontSize: 18,
    color: '#6C3FC5',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promoJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#292333',
  },
  promoDeskripsi: {
    fontSize: 14,
    color: '#332e3a',
    marginTop: 6,
  },
  daftarMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 6
  },
  labelMenu: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 8,
  }
});
export default App;

