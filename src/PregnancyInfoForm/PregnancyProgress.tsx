export class PregnancyProgress {
    private _week: number;
    private _day: number;
    constructor(numberOfDays: number) {
        this._week = Math.floor(numberOfDays / 7);
        this._day = numberOfDays - this.week * 7;
    }

    public get week() {
        return this._week;
    }

    public get day() {
        return this._day;
    }
}
