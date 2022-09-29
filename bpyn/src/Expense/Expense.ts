export class Expense {
  public id: number;
  public label: string;
  public paid: boolean;
  public value: number;

  constructor(label: string, paid: boolean, value: number) {
    this.id = new Date().valueOf();
    this.label = label;
    this.paid = paid;
    this.value = value;
  }
}
