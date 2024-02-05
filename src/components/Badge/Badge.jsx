
import PropTypes from "prop-types"
import badgeStyles from "./Badge.module.css"

const Badge = ({children}) => {
  return <span>
    {children}
  </span>;
};

Badge.PropTypes = {
    children: PropTypes.node.isRequired,
}
export default Badge;