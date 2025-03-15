import { UserProvider } from "./contexts/UserContext";
import MainRoutes from "./routes";

function App() {
  return (
    <UserProvider>
      <MainRoutes />;
    </UserProvider>
  );
}

export default App;
