import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
    @IsNotEmpty({ message: '제목이 존재하지 않습니다.' })
    public title: string;

    @IsNotEmpty({ message: '내용이 존재하지 않습니다.' })
    public description: string;
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}
