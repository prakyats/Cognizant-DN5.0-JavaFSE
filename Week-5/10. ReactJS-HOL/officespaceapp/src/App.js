import office from "./office.jpg";
import "./App.css";

function App() {

  const officeSpace = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  let color = {};

  if (officeSpace.Rent <= 60000) {
    color = {
      color: "red"
    };
  } else {
    color = {
      color: "green"
    };
  }

  return (
    <div style={{ marginLeft: "170px", marginTop: "60px" }}>
      <h1>Office Space , at Affordable Range</h1>

      <img
        src={office}
        alt="Office Space"
        width="250"
        height="250"
      />

      <h2>Name: {officeSpace.Name}</h2>

      <h3 style={color}>
        Rent Rs. {officeSpace.Rent}
      </h3>

      <h3>Address: {officeSpace.Address}</h3>

    </div>
  );
}

export default App;