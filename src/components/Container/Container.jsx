import styles from "./Container.module.css"
import PropTypes from "prop-types" 
// props must be in camel case

const Container = ({children}) => {
  return <div className={styles.Container}>{children}</div>
}

Container.propTypes ={
    children: PropTypes.node.isRequired,
}

export default Container;