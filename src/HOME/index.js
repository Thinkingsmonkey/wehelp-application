// import 'normalize.css'
import Title from "./components/Title";
import QuestionList from "./components/QuestionList";
import "./index.css";

const Home = () => {
    return (
        <div className="app">
            <Title />
            <QuestionList />
        </div>
    );
}

export default Home;