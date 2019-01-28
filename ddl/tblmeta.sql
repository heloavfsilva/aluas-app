'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Meta 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'


CREATE TABLE meta (
    meta_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    meta_titulo VARCHAR(50),
    meta_descricao VARCHAR(150),
    meta_score INTEGER,
    usu_id integer,
);

ALTER TABLE meta ADD FOREIGN KEY (usu_id) REFERENCES usuario (usu_id);