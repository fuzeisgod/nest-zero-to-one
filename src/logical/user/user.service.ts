import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class UserService {
    /**
     * 查询是否有该用户
     * @param useraccount 用户账户
     */
    async findOne(useraccount: string): Promise<any | undefined> {
        const sql = `
        SELECT
          user_id, account_name, passwd
        FROM
          admin_user
        WHERE
          account_name = '${useraccount}'
      `; // 一段平淡无奇的 SQL 查询语句
        try {
            const res = await sequelize.query(sql, {
                type: Sequelize.QueryTypes.SELECT, // 查询方式
                raw: true, // 是否使用数组组装的方式展示结果
                logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
            });
            const user = res[0]; // 查出来的结果是一个数组，我们只取第一个。

            // 若查不到用户，则 user === undefined
            return user;
        } catch (error) {
            return void 0;
        }
    }

    /**
     * 注册
     * @param requestBody 请求体
     */
    async register(requestBody: any): Promise<any> {
        const { useraccount, userpassword, re_userpassword } = requestBody;
        if (userpassword !== re_userpassword) {
            return {
                code: 400,
                msg: '两次密码输入不一致'
            }
        }
        const user = await this.findOne(useraccount)
        if (user) {
            return {
                code: 400,
                msg: '用户已存在',
            };
        }

        // 若密码输入正确，且该用户未存在
        const salt = makeSalt(); // 制作密码盐
        const hashPwd = encryptPassword(userpassword, salt);

        const registerSQL = ``

    }

}
