export class SetupUpdateDto {
    constructor(
        public setupId: string,
        public instrumentId: string,
        public ticker: string,
        public Name: string,
        public price: number,
        ) {
    }
}