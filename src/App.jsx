import InputTodo from "./components/InputEmployee"
import ListTodo from "./components/ListEmployee"
export const URL = "https://empdb-rs8r-app-api.onrender.com/";

function App() {


  return (
<>
    <div className="container mt-5">
        <InputTodo></InputTodo>
        <ListTodo></ListTodo>
    </div>
</>
  )
}

export default App
