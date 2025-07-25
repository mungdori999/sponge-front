import "../../css/Header/Header.css";

const Header = ({ leftchild, title, rightchild }) => {
  return (
    <header className="Header">
      <div className="header-left">{leftchild}</div>
      <div className="header-center">{title}</div>
      <div className="header-right">{rightchild}</div>
    </header>
  );
};

export default Header;
