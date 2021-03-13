/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClick , showAddTask}) => {

  return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color={showAddTask ? "#222" : "#25915a"} text={showAddTask ? "Close" : "Add"}/>
        </header>
  );
};

// If not props are passed to the component where it is called \
// the default will kick in.
Header.defaultProps = {
  title: "This is the header component"
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  showAddTask: PropTypes.bool
};

export default Header;
