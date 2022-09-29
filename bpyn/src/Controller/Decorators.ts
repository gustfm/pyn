import {
    Param,
    ParseIntPipe
} from '@nestjs/common';

export const Id = (param: string = 'id') => Param(param, new ParseIntPipe());
