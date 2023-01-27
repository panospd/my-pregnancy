import "./PregnancyInfo.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePick from "../components/datepick";
import { useState } from "react";

function PregnancyInfo() {
    const [lastPeriodDate, SetLastPeriodDate] = useState(new Date());

    const onSubmit = () => {
        console.log("hello")
        localStorage.setItem("pregnancy-start", lastPeriodDate.toString())
    }
    return (
        <form className="pregnancy-info-form">
            <div className="form-group">
                <DatePick
                    selected={lastPeriodDate}
                    iconUrl="./period.png"
                    label="When was the last time you had period?"
                    onChange={(d) => SetLastPeriodDate(d)}
                />

                {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                Doctor's observation
                </span>
                </div>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    >
                    <option selected>Week</option>
                    { weeks().map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    }) }
                    </select>
                    <select
                    className="form-select"
                    aria-label="Default select example"
                    >
                    <option selected>Day</option>
                    { days().map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    }) }
                </select>
            </div> */}
            </div>
            <button 
                type="button" 
                className="btn btn-primary pregnancy-form-submit"
                onClick={onSubmit}
            >
                Submit
            </button>
            {localStorage.getItem("pregnancy-start")}
        </form>
    );
}

export default PregnancyInfo;
