export class InstrumentCreateDto{
    constructor(    
        public ticker: string,
        public Name: string,
        public price: number,
        ) {
    }
}

