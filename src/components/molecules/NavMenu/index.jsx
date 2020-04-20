/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useCallback, useEffect } from "react";
import "./NavMenu.scss";
import Logo from "../../atoms/Logo";
import MenuLink from "../../atoms/MenuLink";
import Button from "../../atoms/Button";
import { FaRegCommentAlt, FaBars } from "react-icons/fa";

const menuItemList = [
  { name: "About", url: "#about", active: true },
  { name: "Services", url: "#services" },
  { name: "Solutions", url: "#solutions" },
  { name: "Blog", url: "#blog" },
];

const NavMenu = memo(() => {
  const [menuItems, setMenuItems] = useState(menuItemList);
  // To make the link as active on page load
  useEffect(() => {
    const hashLink = window.location.hash;
    if (hashLink) {
      const validLink = menuItems.find((item) => item.url === hashLink);
      if (validLink) {
        resetActiveMenu(validLink.name);
      }
    }
  }, []);

  const resetActiveMenu = useCallback((selectedEntry) => {
    const clonedMenuItems = [...menuItems];
    clonedMenuItems.forEach(
      (item) => (item.active = item.name === selectedEntry)
    );
    // Setting the menu items again with recently changed active link
    setMenuItems(clonedMenuItems);
  }, []);

  const onMenuItemClick = useCallback((e) => {
    resetActiveMenu(e.target.innerText);
  }, []);

  return (
    <nav className="nav">
      <FaBars className="nav__mob-menu__toggle" />
      <Logo />
      <div className="nav__menu-container">
        <ul className="nav__menu-list">
          {menuItems.map(({ name, url, active }) => (
            <li key={name}>
              <MenuLink href={url} active={active} onClick={onMenuItemClick}>
                {name}
              </MenuLink>
            </li>
          ))}
        </ul>
        <Button icon={FaRegCommentAlt}>Get In Touch</Button>
      </div>
      <FaRegCommentAlt className="nav__mob__get-in-touch" />
    </nav>
  );
});

export default NavMenu;
