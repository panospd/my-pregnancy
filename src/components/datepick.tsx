import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickProps {
    iconUrl?: string;
    label?: string;
    selected: Date;
    onChange: (selected: Date) => void
}

function DatePick(props: DatePickProps) {
    return (
        <div className="input-group mb-5">
            <div className="input-group-prepend">
                {props.iconUrl && (
                    <span className="input-group-text" id="basic-addon1">
                        {<img src={props.iconUrl}></img>}
                        {props.label && <span>{props.label}</span>}
                    </span>
                )}
            </div>
            <div className="form-control datepick-container">
                <DatePicker
                    className="datepick"
                    selected={props.selected}
                    onChange={(date: Date) => props.onChange(date)}
                />
            </div>
        </div>
    );
}

export default DatePick;
