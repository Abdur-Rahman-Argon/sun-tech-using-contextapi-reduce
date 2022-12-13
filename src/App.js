import "./App.css";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
