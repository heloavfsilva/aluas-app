'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Acesso 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'

CREATE TABLE acesso (
    acesso_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usu_id INTEGER,
    acesso_entrada DATETIME,
    acesso_saida DATETIME
);

ALTER TABLE acesso ADD FOREIGN KEY (usu_id) REFERENCES usuario (usu_id);