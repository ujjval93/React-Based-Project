import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-800 w-full min-h-screen py-10">
      <div className="flex flex-col items-center bg-gray-900 w-[800px] h-auto mt-15 rounded-lg py-20 shadow-lg">
        <h1 className="text-2xl text-white font-bold ">Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
