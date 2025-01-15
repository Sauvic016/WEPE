import { NavBar } from "@/components/common/Navbar";
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="font-fuzzy-bubbles w-full">
      <NavBar />
      <div className=" flex-1  ">
        <Home />
      </div>
    </div>
  );
}

export default App;
