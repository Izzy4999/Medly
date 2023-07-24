import { useState, useEffect } from "react";

const useRightClickMenu = () => {
  const [x, setX] = useState<number | string>(0);
  const [y, setY] = useState<number | string>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState()

  const handleContextMenu = (e: React.MouseEvent,righClicked:any) => {
    e.preventDefault();
    e.clientX - 200 > window.innerWidth
      ? setX(`${window.innerWidth - 240}px`)
      : setX(e.pageX);
    e.pageY + 185 > window.innerHeight
      ? setY(`${window.innerHeight - 215}px`)
      : setY(e.pageY);
    setShowMenu(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSelected(righClicked);

  };

  const handleClick = () => {
    showMenu && setShowMenu(false);
    setX(0);
    setY(0);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { x, y, showMenu, handleContextMenu, selected };
};

export default useRightClickMenu;
