import Quote from "./components/Quote";
import Time from "./components/Time";
function App() {
  return (
    <div className="h-screen mx-auto bg-cover bg-desktop-daytime">
      <div className="container mx-auto">
        <header className="text-center">
          <h1>Clock App</h1>
        </header>
        <Quote />
        <Time />
      </div>
    </div>
  );
}

export default App;
