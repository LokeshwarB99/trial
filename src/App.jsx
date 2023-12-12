import InputTodo from "./components/InputEmployee"
import ListTodo from "./components/ListEmployee"
export const URL = process.env.REACT_APP_SERVER_URL;

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
