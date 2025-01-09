import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  const menuItem = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Todo",
      url: "/todo",
    },
  ];

  return (
    <>
      <Navigation menuItems={menuItem} />
      <main className="h-screen my-10 bg-gray-300 p-10 max-w-6xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
