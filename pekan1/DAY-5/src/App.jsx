import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ContactForm from "./components/ContactForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <h1>Evaluasi Hari ke-5</h1>

      <Counter />
      <UserProfile />
      <ContactForm />
      <TodoList />
    </div>
  );
}

export default App;
