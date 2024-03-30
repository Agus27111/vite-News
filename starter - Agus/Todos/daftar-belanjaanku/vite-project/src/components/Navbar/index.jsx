import shoppingLogo from "../../assets/shopping-icon.svg";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={shoppingLogo} className={styles.logo} alt="Shopping logo" />
      <h1 className={styles.navItem}>Daftar BelanjaKu</h1>
    </nav>
  );
};

export default Navbar;
