Dokumentasi ini dibuat dengan menuliskan langkah-langkah yang ada pada video dan menuliskan ulang dengan bantuan chatGpt




Dokumentasi Aplikasi Todo
Gambaran Umum
Dokumentasi ini menjelaskan langkah-langkah dalam membuat aplikasi Todo menggunakan React. Aplikasi akan mencakup berbagai aspek pengembangan React termasuk manajemen state, pembuatan komponen, penanganan acara, dan penataan tampilan menggunakan CSS Modules. Dengan mengikuti panduan ini, Anda akan mempelajari dasar-dasar pengembangan React dan membuat aplikasi Todo yang berfungsi.

Apa yang Akan Dipelajari
Manajemen state React (menggunakan hook useState)
Siklus hidup React (menggunakan hook useEffect)
Memperbarui state dalam komponen React
Penanganan acara dalam React (onClick dan onChange)
Membuat komponen dalam React
Pengetikan prop menggunakan PropTypes
Penataan tampilan komponen menggunakan CSS Modules
Panduan Langkah demi Langkah
Langkah 1: Menyiapkan useState
javascript

Copy code
```javascript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
```
Langkah 2: Membuat Komponen Navbar
Buat folder baru bernama Navbar di dalam src/components.
Di dalam folder Navbar, buat dua file: index.js dan Navbar.module.css.
Implementasikan komponen Navbar di index.js:
javascript
Copy code
```javascript
import React from 'react';
import styles from './Navbar.module.css';
import ShoppingIcon from '../../public/logo192.png';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={ShoppingIcon} className={styles.navIcon} alt="icon" />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
};
```
export default Navbar;
Langkah 3: Menyiapkan Tata Letak dan Form
javascript
Copy code
```javascript
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Form from './components/Form';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      alert('List tidak boleh kosong');
      return;
    }

    // Handle pengiriman formulir
  };

  return (
    <div>
      <Navbar />
      <Section>
        <Form
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Section>
    </div>
  );
}
export default App;
```

Langkah 4: Mengelola Todos dengan useState
javascript
Copy code
```javascript
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Susu',
      completed: false,
      count: 1,
    },
    // Todos awal lainnya
  ]);

  // Tambahkan fungsi untuk mengelola todos

  return (
    <div>
      <Navbar />
      <Section>
        <Form
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <TodoList todos={todos} />
      </Section>
    </div>
  );
}
export default App;
```

Langkah 5: Mengimplementasikan Penanganan Acara dan Penataan Tampilan Dinamis
javascript
Copy code
```javascript
// Tambahkan penanganan acara dan penataan tampilan dinamis pada komponen TodoList
Langkah 6: Menambahkan PropTypes
javascript
Copy code
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TodoList;
```
Langkah 7: Menyelesaikan Aplikasi
Implementasikan penataan tampilan dan penanganan acara dinamis pada komponen TodoList.
Tingkatkan fungsionalitas seperti menambahkan dan mengurangi jumlah todos.
Implementasikan fitur tambahan yang diperlukan (misalnya, menghapus todos, menandai todos sebagai selesai).
Tambahkan PropTypes yang tersisa untuk komponen lain sesuai kebutuhan.


Kesimpulan
Selamat! Anda telah berhasil membangun aplikasi Todo menggunakan React. Melalui proyek ini, Anda telah mempelajari berbagai konsep dasar pengembangan React termasuk manajemen state, pembuatan komponen, penanganan acara, dan penataan tampilan. Teruslah menjelajah dan bangun lebih banyak proyek untuk meningkatkan keterampilan React Anda.