import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    // 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以可以将类作为接口类型
    constructor(private readonly userService: UserService) { }

    @Post('find-one')
    findOne(@Body() body: any) {
        return this.userService.findOne(body.username)
    }
}
