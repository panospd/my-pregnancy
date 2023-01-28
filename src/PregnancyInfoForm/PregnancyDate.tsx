export class PregnancyDate {
    constructor(
        public year: number,
        public month: number,
        public day: number) {
        this.EnsureIsValid();
    }

    private EnsureIsValid() {
        new Date(
            this.year,
            this.month,
            this.day);
    }

    static CreateFrom(date: Date): PregnancyDate {
        return new PregnancyDate(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate());
    }

    static Parse(date: string): PregnancyDate {
        return JSON.parse(date) as PregnancyDate;
    }
}
