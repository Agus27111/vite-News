import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navItem}>
          <ion-icon
            className={`${styles.cart} cart-outline`}
            size="large"
          ></ion-icon>
          <div className={styles.title}>
            <h1>Shopping Cart</h1>
            <small>By Agus Setiawan</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
