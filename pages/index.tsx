import AddTodo from "../components/AddTodo";
import Header from "../components/Header";

const home: React.FC = () => {
  return (
    <div className="h-screen relative bg-gray-800">
      <Header />
      <AddTodo />
    </div>
  );
};

export default home;
