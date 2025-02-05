import PropTypes from "prop-types";
import styles from "./Container.module.css";

function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
Container.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
