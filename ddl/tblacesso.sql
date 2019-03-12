'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Acesso 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
08/03/2019	Heloa Silva			Adiciona campo token
12/03/2019	Heloa Silva			Modifica acesso_entrada e
								acesso_saida para varchar
----------------------------------------------'

CREATE TABLE acesso (
    acesso_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	usu_id INTEGER,
    usu_username VARCHAR(50),
    acesso_entrada VARCHAR(50),
    acesso_saida VARCHAR(50),
	token VARCHAR(50)
);

ALTER TABLE acesso ADD FOREIGN KEY (usu_id) REFERENCES usuario (usu_id);