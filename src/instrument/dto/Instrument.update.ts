export class InstrumentUpdateDto {
    constructor(
        public ticker: string,
        public name: string,
        public price: number,
        ) {
    }
}
