'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Classificação

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão 
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'


CREATE TABLE 	 (
    cfcs_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cfcs_nome VARCHAR(50),
    cfcs_descricao VARCHAR(150),
    cfcs_limite_superior INTEGER,
    cfcs_limite_inferior INTEGER
);
