import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ScopedCssBaseline } from "@mui/material";
import {
  ChakraV1,
  ChakraV2,
  MaterialV1,
  MaterialV2,
  HeadlessV1,
  HeadlessV2,
} from "./components";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const data = {
  lorem:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut arcu orci. Integer sagittis lacinia sem vel lacinia. Phasellus pharetra leo quis quam euismod, ut pulvinar eros pellentesque. Pellentesque vehicula augue ac tristique lobortis. Vivamus nec ante ligula. Mauris tempor aliquam lacus, quis tincidunt risus congue sed. Maecenas eu mi nulla.",
  alertText: "Button clicked!",
};

function App() {
  const [version, setVersion] = useState(true);

  return (
    <div className="App">
      <header className="d-flex align-items-center">
        <h1 className="mb-4 flex-grow-1 H1">
          Component library comparison - version {version ? 1 : 2}
        </h1>
        <button className="Button" onClick={() => setVersion(!version)}>
          Change version
        </button>
      </header>
      {version ? (
        <>
          <ChakraProvider>
            <ChakraV1 data={data} />
          </ChakraProvider>
          <ScopedCssBaseline>
            <MaterialV1 data={data} />
          </ScopedCssBaseline>
          <HeadlessV1 data={data} />
        </>
      ) : (
        <>
          <ChakraProvider>
            <ChakraV2 data={data} />
          </ChakraProvider>
          <ScopedCssBaseline>
            <MaterialV2 data={data} />
          </ScopedCssBaseline>
          <HeadlessV2 data={data} />
        </>
      )}
    </div>
  );
}

export default App;
