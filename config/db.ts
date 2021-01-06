// config/db.ts
const productConfig = {
    mssql: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'czx86088101',
        database: 'nest_zero_to_one', // 库名
        connectionLimit: 10, // 连接限制
    },
};

const localConfig = {
    mssql: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'czx86088101',
        database: 'nest_zero_to_one', // 库名
        connectionLimit: 10, // 连接限制
    },
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;