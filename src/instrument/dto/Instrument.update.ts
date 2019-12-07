export class UpdateInstrument{
    constructor(    
        public instrumentId: number,
        public ticker: string,
        public Name: string,
        public price: number,
        ) {
    }
}