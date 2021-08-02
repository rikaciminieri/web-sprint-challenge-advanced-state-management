import React, { useEffect } from "react";
import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import { fetchSmurf } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {

  useEffect(() => {
    props.fetchSmurf();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
};


export default connect(null, { fetchSmurf })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
