import Navicon from "../../assets/newyorktimes.svg";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        <img className={styles.navIcon} src={Navicon} alt="newyorr times" />
        <p className={styles.navTitle}>Berita Negeri Konoha</p>
      </div>
    </nav>
  );
}

export default Navbar;
