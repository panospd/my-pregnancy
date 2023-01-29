import { PregnancyProgress } from "./PregnancyProgress";

type PregnancyDateData = {
    year: number;
    month: number;
    day: number;
}

export class PregnancyDate {
    private _year: number;
    private _month: number;
    private _day: number;
    constructor(data: PregnancyDateData) {
        this._year = data.year;
        this._month = data.month;
        this._day = data.day;
    }

    static createFrom(date: Date) {
        const period = new PregnancyDate({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        })

        period.EnsureIsValid();

        return period;
    }

    get year() {
        return this._year;
    }

    get month() {
        return this._month;
    }

    get day() {
        return this._day;
    }

    private EnsureIsValid() {
        new Date(this._year, this._month - 1, this._day)
    }

    static Parse(date: string): PregnancyDate | undefined {
        const data = JSON.parse(date) as PregnancyDateData;

        if (!data) return undefined;

        return new PregnancyDate(data)
    }

    progress(): PregnancyProgress {
        const today = new Date()
        const daysInDiff = this.dateDiffInDays(this.toDate(), today)
        return new PregnancyProgress(daysInDiff)
    }

    stringify() {
        const data: PregnancyDateData = {
            year: this.year,
            month: this.month,
            day: this.day
        }

        return JSON.stringify(data);
    }

    toDate() {
        return new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0)
    }

    private dateDiffInDays = (a: Date, b: Date) => {
        const aDate = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
        const bDate = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 0, 0, 0, 0);
        return Math.floor((bDate.getTime() - aDate.getTime()) / (1000 * 3600 * 24));
    }
}
