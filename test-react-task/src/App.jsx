import Description from "./components/CompanyDescription";
import Contacts from "./components/Contacts";
import Header from "./components/header";
import Services from "./components/Services";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Description />
      <Services />
      <Contacts />
    </div>
  );
}

export default App;
