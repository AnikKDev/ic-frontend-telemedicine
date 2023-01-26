import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  // ! for toggling theme
  /* const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(isDark ? "dark" : "mytheme");
  }, [isDark]);
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  console.log(theme);
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]); */
  return (
    <div>
      {/* for toggling theme */}
      {/* <button onClick={() => setIsDark(!isDark)} className="btn btn-primary">
        hello
      </button> */}

      {/* router */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
