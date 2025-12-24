import "./Navbar.css";

interface NavbarProps {
  search?: string;
  onSearchChange?: (value: string) => void;
}

const Navbar = ({ search = "", onSearchChange }: NavbarProps) => {
  return (
    <nav className="navbar">
      <h1 className="logo">TLD Atlas</h1>

      {onSearchChange && (
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      )}
    </nav>
  );
};

export default Navbar;
