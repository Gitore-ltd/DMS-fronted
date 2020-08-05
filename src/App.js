import React, { Component } from "react"
import "./App.css"
import LandingPageSA from "./containers/LandingPageContainer/LandingPageSA/LandingPageSA"
import LandingPageSB from "./containers/LandingPageContainer/LandingPageSB/LandingPageSB"
export class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPageSA />
        <LandingPageSB />
      </div>
    )
  }
}

export default App
