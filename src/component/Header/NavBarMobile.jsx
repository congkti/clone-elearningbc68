import React from "react";
import { Button, Popover, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import FormSearchBar from "../FormSearchBar/FormSearchBar";
import NavBarMenu from "./NavBarMenu";
const content = (
  <>
    <h2 className="h-10 bg-blue-700 text-center text-white text-xl">Header</h2>
    <div className="block sm:hidden">
      <FormSearchBar />
    </div>
    <div className="">
      <NavBarMenu />
    </div>
  </>
);
const NavBarMobile = () => (
  <Popover
    rootClassName="headerNavMenu_mobile"
    placement="bottom"
    title={false}
    content={content}
    arrow={false}
    trigger="click"
  >
    <button className="toggleNav_btn text-2xl pl-4">
      <MenuOutlined />
    </button>
  </Popover>
);
export default NavBarMobile;
