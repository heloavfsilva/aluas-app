'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Classificação

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão 
----------------------------------------------'


CREATE TABLE classificacao (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(150),
    limitesuperior INTEGER,
    limiteinferior INTEGER
);