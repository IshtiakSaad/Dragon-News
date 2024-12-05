import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/LeftNavBar";
import Navbar from "../components/Navbar";
import RightNavBar from "../components/RightNavBar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-8/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-8/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-8/12 mx-auto grid grid-cols-12">
        <aside className="col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">
        <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavBar></RightNavBar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
