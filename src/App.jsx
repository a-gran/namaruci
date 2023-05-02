import './App.scss'
import Greetings from './pages/main/greetings/Greetings'
import Header from './components/header/Header'
import Mission from './pages/main/mission/Mission'

function App() {
    return (
        <div className="App">
            <Header />
            <Greetings />
            <Mission />
        </div>
    )
}

export default App
