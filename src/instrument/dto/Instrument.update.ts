export class UpdateInstrument{
    constructor(    
        public instrumentId: string,
        public ticker: string,
        public Name: string,
        public price: number,
        ) {
    }
}