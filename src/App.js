import Quote from "./components/Quote";
import Clock from "./components/Clock";
function App() {
  return (
    <div className="h-screen mx-auto bg-cover bg-desktop-daytime">
      <div className="container mx-auto">
        <header className="text-center">
          <h1>Clock App</h1>
        </header>
        <Quote />
        <Clock />
      </div>
    </div>
  );
}

export default App;
