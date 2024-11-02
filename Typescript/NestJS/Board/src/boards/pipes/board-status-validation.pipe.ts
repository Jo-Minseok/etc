import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
    private readonly STATUS_OPTION = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        const index = this.STATUS_OPTION.includes(status);
        return index;
    }
}
