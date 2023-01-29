import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import PregnancyInfo from "./PregnancyInfo";
import PregnancyInfoForm from "./PregnancyInfoForm/";
import { PregnancyDate } from "./PregnancyInfoForm/PregnancyDate";

function App() {
    const [periodDate, setPeriodDate] = useLocalStorage<PregnancyDate>(
        "pregnancy-start", 
        undefined, 
        (item: string): PregnancyDate => {
            return PregnancyDate.Parse(item)!;
        },
        (val) => val.stringify());

    const onPregnancyInfoSubmit = (v: PregnancyDate) => {
        setPeriodDate(v)
    }
    
    return (
        <div className="App">
            <div className="container my-pregnancy-container">
                {
                    !periodDate 
                    ? <PregnancyInfoForm onSubmit={onPregnancyInfoSubmit} /> 
                    : <PregnancyInfo progress={periodDate!.progress()} />}
            </div>
        </div>
    );
}

export default App;
