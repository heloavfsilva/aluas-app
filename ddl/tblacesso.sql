'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Acesso 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
----------------------------------------------'

CREATE TABLE acesso (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    idusuario INTEGER,
    entrada DATETIME,
    saida DATETIME,
);

ALTER TABLE acesso ADD FOREIGN KEY (idusuario) REFERENCES usuario (id);