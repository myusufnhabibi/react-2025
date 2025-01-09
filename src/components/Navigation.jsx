import { Link } from "react-router-dom";

const Navigation = ({ menuItems }) => {
  return (
    <nav className="flex justify-between bg-slate-600 p-4">
      <h1 className="text-2xl font-bold text-white">Logo</h1>
      <ul className="flex flex-row gap-7 p-2">
        {menuItems.map((item) => (
          <li className="text-white hover:text-orange-400" key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
