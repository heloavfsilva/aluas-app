'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Meta 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
----------------------------------------------'


CREATE TABLE meta (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    descricao VARCHAR(150),
    metascore INTEGER,
    idusuario integer,
);

ALTER TABLE meta ADD FOREIGN KEY (idusuario) REFERENCES usuario (id);