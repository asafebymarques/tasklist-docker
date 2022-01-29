module.exports = {
    dialect: 'mysql',
    host: 'db',
    username: 'root',
    password: 'root',
    database: 'nodedb',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};