import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import PregnancyInfo from "./PregnancyInfo";
import PregnancyInfoForm from "./PregnancyInfoForm/";
import { PregnancyDate } from "./PregnancyInfoForm/PregnancyDate";

function App() {
    const [periodDate, setPeriodDate] = useLocalStorage("pregnancy-start", PregnancyDate.CreateFrom(new Date()));

    const onPregnancyInfoSubmit = (v: PregnancyDate) => {
        setPeriodDate(v)
    }
    
    return (
        <div className="App">
            <div className="container my-pregnancy-container">
                {!periodDate ? <PregnancyInfoForm onSubmit={onPregnancyInfoSubmit} /> : <PregnancyInfo periodDate={periodDate} />}
            </div>
        </div>
    );
}

export default App;
