import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/Constants";
import { Context } from "../context/ContextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;

      default:
        break;
    }
  };

  return (
    <div
      className={`hidden md:block w-[240px]
     overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  transition-all ${
       mobileMenu ? "block" : "hidden"
     }`}
    >
      <div className="flex px-5 flex-col ">
        {categories.map((item, index) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type == "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories == item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 bg-white/[0.2]" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;