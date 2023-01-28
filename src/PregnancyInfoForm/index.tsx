import "./PregnancyInfoForm.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePick from "../components/datepick";
import { useState } from "react";
import { PregnancyDate } from "./PregnancyDate";

interface PregnacyInfoFormProps {
    onSubmit: (value: PregnancyDate) => void
}

function PregnancyInfo(props: PregnacyInfoFormProps) {
    const [lastPeriodDate, SetLastPeriodDate] = useState(new Date());

    const onClick = () => {
        props.onSubmit(PregnancyDate.CreateFrom(lastPeriodDate))
    }

    return (
        <form>
            <div className="form-group">
                <DatePick
                    selected={lastPeriodDate}
                    iconUrl="./period.png"
                    label="When was the last time you had period?"
                    onChange={(d) => SetLastPeriodDate(d)}
                />
            </div>
            <button 
                type="button" 
                className="btn btn-primary pregnancy-form-submit"
                onClick={onClick}
            >
                Submit
            </button>
        </form>
    )
}

export default PregnancyInfo;
