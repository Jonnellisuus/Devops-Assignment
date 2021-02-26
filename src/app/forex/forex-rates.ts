export class ForexRates {
  base: string;
  date: string;
  rates: [];

  constructor(base?: string, date?: string, rates?: []) {
    this.base = base;
    this.date = date;
    this.rates = rates;
  }
}
