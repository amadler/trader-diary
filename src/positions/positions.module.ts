import { Module } from '@nestjs/common';
import { PositionController } from './position/position.controller';
import { PositionResultController } from './position-result/position-result.controller';
import { PositionBookmarkController } from './position-bookmark/position-bookmark.controller';
import { PositionsService } from 'src/positions/positions.service';


@Module({
    controllers: [PositionController, PositionResultController, PositionBookmarkController],
    providers: [PositionsService]
})
export class PositionsModule {}
