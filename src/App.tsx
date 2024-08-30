import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollRestoration />
      <div className="sticky top-0 z-50">{/* navbar */}</div>
      <Outlet />
      {/* Footer */}
    </div>
  );
}

export default App;
