import Quote from "./components/Quote";
import Clock from "./components/Clock";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen mx-auto bg-cover bg-desktop-daytime">
      <div className="container mx-auto">
        <header className="text-center">
          <h1 className="text-[2em] font-bold uppercase">Clock.</h1>
        </header>
        <Quote />
        <Clock />
        <Button />
      </div>
    </div>
  );
}

export default App;
