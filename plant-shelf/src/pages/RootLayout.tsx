import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div key={"AS"}>
      <main className="h-[90%]">
        <Outlet />
      </main>
      <footer className="h-[10%]">
        <NavBar />
      </footer>
    </div>
  );
}
