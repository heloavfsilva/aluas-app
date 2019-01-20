'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Usuários 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
----------------------------------------------'

CREATE TABLE usuario (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    primeironome VARCHAR(50),
    sobrenome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(16),
    telefone VARCHAR(50),
    foto VARCHAR(255),
    scoreacumulado INTEGER
);