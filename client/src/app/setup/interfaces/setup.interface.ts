import { PrioritiesEnum } from '../enums/priorities-enum';

export interface SetupInterface {
  setupId: string;
  instrumentId: string;
  createDate: Date;
  memo: string;
  priority: PrioritiesEnum;
  strategyId?: string;
}
