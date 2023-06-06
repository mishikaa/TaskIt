import AddTodo from './AddTodo'
import ListTodos from "./ListTodos";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
           <Navbar />
           <AddTodo />
           <ListTodos />
        </>
    )
}

export default Home;