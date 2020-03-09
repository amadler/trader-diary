export class SetupUpdateDto {
    constructor(
        public setupId: string,
        public instrumentId: string,
        public ticker: string,
        public name: string,
        public price: number,
        ) {
    }
}