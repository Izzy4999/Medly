// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import ContextMenu from "./components/ContextMenu";
import useRightClickMenu from "./hooks/useRightClickMenu";
// import HomePage from "./pages/homePage/HomePage";
// import ImageUpload from "./pages/uploadImage/ImageUpload";
// import Verification from "./pages/verification/Verification";

function App() {
  const {x,y,showMenu} = useRightClickMenu()
  return (
    <div>
      <ContextMenu x={x} y={y} showMenu={showMenu} />
    </div>
  );
}

export default App;
