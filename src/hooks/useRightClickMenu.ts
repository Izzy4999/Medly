import { useState, useEffect } from "react";

const useRightClickMenu = () => {
  const [x, setX] = useState<number | string>(0);
  const [y, setY] = useState<number | string>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.pageX + 200 > window.innerWidth
      ? setX(`${window.innerWidth - 240}px`)
      : setX(e.pageX);
    e.pageY + 185 > window.innerHeight
      ? setY(`${window.innerHeight - 215}px`)
      : setY(e.pageY);
    setShowMenu(true);
  };

  const handleClick = () => {
    showMenu && setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { x, y, showMenu };
};

export default useRightClickMenu;
