export class SetupCreateDto {
    constructor(
        public instrumentId: string,
        public ticker: string,
        public Name: string,
        public price: number,
        ) {
    }
}
