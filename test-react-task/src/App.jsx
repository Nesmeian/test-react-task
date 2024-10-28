import Description from "./components/CompanyDescription";
import Header from "./components/header";
import Services from "./components/Services";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Description />
      <Services />
      {/* Contact Info */}
    </div>
  );
}

export default App;
