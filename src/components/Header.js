/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="#222" text="Add"/>
        </header>
  );
};

// If not props are passed to the component where it is called \
// the default will kick in.
Header.defaultProps = {
  title: "This is the header component"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
