export class Keg {
  public onSale: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public style: string) { }
}
