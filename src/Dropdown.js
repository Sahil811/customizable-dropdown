import React, { useState, useEffect } from "react";
import "./index.scss";

const dummyOptions = [
  "Starter",
  "Main Course",
  "Desserts",
  "Berverage",
  "Others"
];

const dummyValues = [1, 2, 3, 4, 5];

const Dropdown = ({
  values,
  getDropdownValue,
  defaultVal,
  icon = "https://shoal-app.s3.us-east-2.amazonaws.com/assets/dropdown_yellow.png",
  backgroundColorNav = "transparent",
  backgroundColorNavItem = "transparent",
  backgroundDropdownMenu = "white",
  backgroundDropdownMenuItem = "white",
  menuFontSize = "16",
  menuFontWeight = "700",
  menuFontColor = "black",
  menuFontfamily = "inherit",
  optionFontSize = "16",
  optionFontWeight = "300",
  optionFontColor = "#484a4d",
  optionFontFamily = "Serif"
}) => {
  const options = values
    ? values.map((el) => Object.values(el)[1])
    : dummyOptions;

  const optionValues = values
    ? values.map((el) => Object.values(el)[0])
    : dummyValues;

  const [menu, setMenu] = useState(options ? options[0] : "Starter");
  const [open, setOpen] = useState(false);

  const setOption = (opt, val) => {
    setOpen(!open);
    setMenu(opt);
    getDropdownValue(val);
  };

  useEffect(() => {
    getDropdownValue(defaultVal);
    const menuOption = values
      ? values.map((el) => (el.value === defaultVal ? el.option : null))
      : options[0];
    setMenu(menuOption);
  }, [defaultVal]);

  return (
    <Navbar backgroundColorNav={backgroundColorNav}>
      <Navitem
        icon={icon}
        menu={menu}
        setOpen={setOpen}
        open={open}
        backgroundColorNavItem={backgroundColorNavItem}
        menuFontSize={menuFontSize}
        menuFontWeight={menuFontWeight}
        menuFontColor={menuFontColor}
        menuFontfamily={menuFontfamily}
      >
        <DropdownMenu backgroundDropdownMenu={backgroundDropdownMenu}>
          {options &&
            options.map((option, i) => (
              <DropdownMenuItem
                value={optionValues[i]}
                key={option}
                setOption={setOption}
                backgroundDropdownMenuItem={backgroundDropdownMenuItem}
                optionFontColor={optionFontColor}
                optionFontSize={optionFontSize}
                optionFontWeight={optionFontWeight}
                optionFontFamily={optionFontFamily}
              >
                {option}
              </DropdownMenuItem>
            ))}
          {/* <DropdownMenuItem leftIcon={"🐸"} rightIcon={"🐭"}></DropdownMenuItem> */}
        </DropdownMenu>
      </Navitem>
    </Navbar>
  );
};

export default Dropdown;

const Navbar = ({ children, backgroundColorNav }) => {
  return (
    <nav className="navbar" style={{ background: `${backgroundColorNav}` }}>
      <ul className="navbar__nav">{children}</ul>
    </nav>
  );
};

const Navitem = ({
  menu,
  icon,
  setOpen,
  open,
  children,
  backgroundColorNavItem,
  menuFontSize,
  menuFontWeight,
  menuFontColor,
  menuFontfamily
}) => {
  return (
    <li
      className="navItem"
      style={{ background: `${backgroundColorNavItem}` }}
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
      onClick={() => setOpen(!open)}
    >
      <a className="navItem__iconButton">
        <span
          style={{
            fontSize: `${menuFontSize}px`,
            fontWeight: `${menuFontWeight}`,
            color: `${menuFontColor}`,
            fontFamily: `${menuFontfamily}`
          }}
        >
          {menu}
        </span>
      </a>
      <span className="menuIcon">
        {" "}
        <img
          style={{ width: "15px", objectFit: "contain" }}
          src={icon}
          alt="icon"
        ></img>
      </span>
      {open && children}
    </li>
  );
};

const DropdownMenu = ({ backgroundDropdownMenu, children }) => {
  return (
    <div
      className="dropdownMenu"
      style={{ background: `${backgroundDropdownMenu}` }}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = ({
  children,
  leftIcon,
  rightIcon,
  setOption,
  backgroundDropdownMenuItem,
  optionFontSize,
  optionFontColor,
  optionFontWeight,
  optionFontFamily,
  value
}) => {
  return (
    <a
      className="dropdownMenuItem"
      style={{
        background: `${backgroundDropdownMenuItem}`,
        color: `${optionFontColor}`,
        fontSize: `${optionFontSize}px`,
        fontWeight: `${optionFontWeight}`,
        fontFamily: `${optionFontFamily} !important`
      }}
      onClick={() => setOption(children, value)}
    >
      <span className="navItem__iconButton" style={{ flex: "0" }}>
        {leftIcon}
      </span>

      <p className="textCenter">{children}</p>

      <span className="dropdownMenuItem__iconRight">{rightIcon}</span>
    </a>
  );
};
