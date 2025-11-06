import './App.css';
import Greeting from "./Greeting.jsx";
import UserCard from "./UserCard.jsx";
import TaskList from "./TaskList.jsx";
function App() {
    return (
        <div className="App">
            <h1>Моё React приложение</h1>
            <Greeting />
            <UserCard name="Иван" role="Администратор" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={true}/>
            <UserCard name="Саня" role="Экономист" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={false}/>
            <UserCard name="Леха" role="Сомелье" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={false}/>
            <TaskList />
        </div>
    );
}
export default App;