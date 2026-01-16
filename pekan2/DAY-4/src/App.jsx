import FetchPost from "./components/FetchPost";
import AxiosUser from "./components/AxiosUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <h1>Evaluasi Harian - Hari 10</h1>

      <FetchPost />
      <AxiosUser />
      <UserList />
    </div>
  );
}

export default App;
