import Logo from "./components/Logo";
import ListaDeTareas from "./components/ListaDeTarea";
function App() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <Logo></Logo>

      <div className="w-[600px] min-h-[500px] bg-[#d0d0d5] p-6 m-3  rounded-3xl flex flex-col  items-center ">
        <h1 className="text-3xl text-[#1b1b32] font-bold font-Roboto text-center mb-4 my-5 ">
          Mis Tareas
         <ListaDeTareas/>
        </h1>
       
      </div>
    </div>
  );
}

export default App;
