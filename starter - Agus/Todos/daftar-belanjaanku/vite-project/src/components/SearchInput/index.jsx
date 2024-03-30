import PropTypes from "prop-types";
import styles from "./SearchInput.module.css";

function SearchInput(props) {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="list"
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      />
      <button className={styles.addButton} type="submit">
        Tambah
      </button>
    </form>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
//
