import { Outlet } from "react-router-dom";
import { Header } from "../componets/Header";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
