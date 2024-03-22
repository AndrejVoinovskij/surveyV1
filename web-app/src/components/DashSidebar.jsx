import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaPlus,
  FaList,
  FaHome,
  FaChartBar,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FcSurvey } from "react-icons/fc";
import * as service from "../services/auth";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const logout = () => {
    service.logout(currentUser.token, dispatch, signoutSuccess);
    console.log(currentUser);
    navigate("/sign-in");
  };
  const customTheme = {
    root: {
      base: "bg-gradient-to-r from-blue-500 to-cyan-500",
      inner: "bg-gradient-to-r from-blue-500 to-cyan-500"
    }
  };
  return (
    <Sidebar theme={customTheme}  className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1 mt-0 pt-1 items-center">
            <ul className="hidden md:flex md:flex-col items-left h-screen">
                  <Link to="/dashboard?tab=apklausos">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "apklausos"}
                    icon={FaList}
                    labelColor="dark"
                    as="div"
                  >
                    Apklausos
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=sukurtiApklausa">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "sukurtiApklausa"}
                    icon={FaPlus}
                    labelColor="dark"
                    as="div"
                  >
                    Sukurti apklausa
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=apklausuStatistika">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "apklausuStatistika"}
                    icon={FaChartBar}
                    labelColor="dark"
                    as="div"
                  >
                    Apklausu statistika
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=roliuKeitimas">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "roliuKeitimas"}
                    icon={HiUser}
                    labelColor="dark"
                    as="div"
                  >
                    Rolių keitimas
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=forms">
                  <Sidebar.Item
                    className="blue-500 hover:bg-sky-700"
                    active={tab === "forms"}
                    icon={HiAcademicCap}
                    labelColor="dark"
                    as="div"
                  >
                    Klausimynas
                  </Sidebar.Item>
                </Link>

                <Link to="/dashboard?tab=visaStatistika">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "visaStatistika"}
                    icon={FaChartLine}
                    labelColor="dark"
                    as="div"
                  >
                    Visa statistika
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=kazkasPapildomo1">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "kazkasPapildomo1"}
                    icon={FaQuestion}
                    labelColor="dark"
                    as="div"
                  >
                    Kazkas papildomo
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=kazkasPapildomo2">
                  <Sidebar.Item className="blue-500 hover:bg-sky-700"
                    active={tab === "kazkasPapildomo2"}
                    icon={FaQuestion}
                    labelColor="dark"
                    as="div"
                  >
                    Kazkas papildomo
                  </Sidebar.Item>
                </Link>
          </ul>

          {/* Hamburger */}
        
          
          <button className="space-y-2 group md:hidden">
            <h1 className="block font-sans text-base antialiased font-medium leading-relaxed h-[20px] text-blue-gray-900">Meniu</h1>
            <RxHamburgerMenu className="w-[50px] h-[50px]"/>
        
            {/* mobile menu */}
            <ul className="bg-[#F9FAFB] w-screen group-focus:pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col group-focus:space-y-3 justify-end">
              <button className="px-10 py-8 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
              </button>

              <Link to="/dashboard?tab=apklausos">
                <Sidebar.Item
                className="flex justify-center w-full py-4 hover:bg-sky-700"
                  active={tab === "apklausos"}
                  icon={FaList}
                  labelColor="dark"
                  as="div"
                >
                  Apklausos
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=sukurtiApklausa">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "sukurtiApklausa"}
                icon={FaPlus}
                labelColor="dark"
                as="div"
              >
                Sukurti apklausa
              </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=apklausuStatistika">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "apklausuStatistika"}
                icon={FaChartBar}
                labelColor="dark"
                as="div"
              >
                Apklausu statistika
              </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=roliuKeitimas">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "roliuKeitimas"}
                icon={HiUser}
                labelColor="dark"
                as="div"
              >
                Rolių keitimas
              </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=forms">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "forms"}
                icon={HiAcademicCap}
                labelColor="dark"
                as="div"
              >
                Klausimynas
              </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=visaStatistika" >
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "visaStatistika"}
                icon={FaChartLine}
                labelColor="dark"
                as="div"
              >
                Visa statistika
              </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=kazkasPapildomo1">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "kazkasPapildomo1"}
                icon={FaQuestion} 
                labelColor="dark"
                as="div"
              >
                Kazkas papildomo
              </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=kazkasPapildomo2">
              <Sidebar.Item
              className="flex justify-center w-full py-4 hover:bg-sky-700"
                active={tab === "kazkasPapildomo2"}
                icon={FaQuestion}
                labelColor="dark"
                as="div"
              >
                Kazkas papildomo
              </Sidebar.Item>
              </Link>
            </ul>
          </button>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
