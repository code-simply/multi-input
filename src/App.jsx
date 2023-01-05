import { MultiInput } from "./components/multi-input";
import "./App.css";

function App() {

  const handleValue = (value) =>{
    console.log(value)
  }

  return (
    <div className="App">
      <div className="w-screen h-screen flex justify-center items-center">
      <MultiInput placeHolder="One Are More Text Here.." width="600" className={"border-2 w-16"} buttonClass={"text-yellow-500"} handleValue={handleValue}/>
      </div>
    </div>
  )
}

export default App
