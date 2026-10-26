import React, { useState } from 'react';
import {View } from 'react-native';

const DAFTAR_MENU = [ 
  { id: '1', 
    nama: 'Kopi Susu Catnip', 
    harga: 20000,
    Image: require('./assets/kopi-susu.png'),
  }, 
  { id: '2', 
    nama: 'Matcha Paw Latte', 
    harga: 25000,
    Image: require('./assets/matcha.png'),
  }, 
  { id: '3', 
    nama: 'Croissant Ikan Tuna', 
    harga: 18000,
    Image: require('./assets/croissant.png'), 
  }, 
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);

  return (
    <View>
      {DAFTAR_MENU.map(item => (
        <MenuItem
          key={item.id}
          nama={item.nama}
          harga={item.harga}
          Image={item.Image}
        />  
      ))};
    </View>
  );
}

export default App;

