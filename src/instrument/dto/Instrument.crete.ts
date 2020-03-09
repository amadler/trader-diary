export class InstrumentCreateDto{
    constructor(    
        public ticker: string,
        public name: string,
        public price: number,
        ) {
    }
}

