//aqui ficam armazenadas as credencias de acesso ao banco de dados
//tbm guarda as configuracoes do database

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'masterclass',
    define: {
        timestamps: true, // cria uma coluna que mostra o horario e a data de cada alteracao
        underscored: true, // deixa as colunas_com_esse_formato
        underscoredAll: true, // deixa as tabelas_com_esse_formato
    },
};
