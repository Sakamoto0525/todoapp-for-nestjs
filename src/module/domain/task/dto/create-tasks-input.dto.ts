import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTasksInputDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'タスクのタイトル', example: 'タイトル' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'タスクの説明', example: '説明' })
  description: string;

  @IsInt()
  @IsNumber()
  @ApiProperty({ description: 'ボードID', example: 1 })
  boardId: number;

  @IsInt()
  @IsNumber()
  @ApiProperty({ description: 'レーンID', example: 1 })
  laneId: number;
}
