import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(username: string): string {
        if (username === 'kid') {
            return 'kid is here'
        }
        return 'no one here'
    }
}
