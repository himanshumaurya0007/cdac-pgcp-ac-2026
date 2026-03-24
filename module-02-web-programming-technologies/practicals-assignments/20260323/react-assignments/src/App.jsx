import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";

import UseCallbackDemo from "./components/UseCallbackDemo";
import PreviousSatateDemo from "./components/PreviousSatateDemo";

import ErrorBoundary from "./components/ErrorHandlingUsingClassComponent";
import ErrorComponent from "./components/ErrorHandlingUsingFunctionalComponent";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import ChangeBackgroundColor from "./components/ChangeBackgroundColor";

function App() {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {/* Program 1 */}
      <UseCallbackDemo />
      <br />
      <hr />
      <br />

      {/* Program 2 */}
      <PreviousSatateDemo />
      <br />
      <hr />
      <br />

      {/* Program 3 */}
      <h1>Error Handling</h1>
      <br />

      <button onClick={() => setHasError(true)}>
        Trigger Functional Component Error
      </button>
      <br />
      <br />

      <ErrorBoundary>
        <ErrorComponent triggerError={hasError} />
        <br />
      </ErrorBoundary>
      <hr />
      <br />

      {/* Program 4 */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <br />

      {/* Program 5 */}
      <ChangeBackgroundColor />

    </>
  )
}

export default App
