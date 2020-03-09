export class SetupCreateDto {
    constructor(
        public instrumentId: string,
        public ticker: string,
        public name: string,
        public price: number,
        ) {
    }
}
