import PropTypes from "prop-types";
import styles from "./Info.module.css";
function Info({ todosLength, getTotalCount, onClick }) {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>Total List: {todosLength}</div>
      <div className={styles.infoTotal}>{`Total Pcs: ${getTotalCount}`}</div>
      <div className={styles.deleteAllButton} onClick={onClick}>
        Hapus Semua
      </div>
    </div>
  );
}

Info.propTypes = {
  todosLength: PropTypes.string.isRequired,
  getTotalCount: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Info;
