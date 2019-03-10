'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Usuários 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'

CREATE TABLE usuario (
    usu_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usu_primeiro_nome VARCHAR(50),
    usu_sobrenome VARCHAR(50),
    usu_username VARCHAR(50),
	usu_email VARCHAR(50),
    usu_senha VARCHAR(16),
    usu_telefone VARCHAR(50),
    usu_foto VARCHAR(255),
    usu_score_acumulado INTEGER
);