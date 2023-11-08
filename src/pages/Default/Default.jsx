import { NavLink } from "react-router-dom";

export function Default() {
  return (
    <main className="mt-52 flex flex-col items-center text-white">
      <h1 className="mb-4 text-5xl">Page not found</h1>
      <NavLink className="text-xl text-blue-300" to="/">
        Return to Home
      </NavLink>
    </main>
  );
}
