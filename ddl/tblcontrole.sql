'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Controle 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
----------------------------------------------'

CREATE TABLE controle (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    idatividade INTEGER,
    idusuario INTEGER,
    idstatus INTEGER,
    descricao VARCHAR(150),
    date DATETIME
);

ALTER TABLE controle ADD FOREIGN KEY (idatividade) REFERENCES atividade(id);
ALTER TABLE controle ADD FOREIGN KEY (idusuario) REFERENCES usuario(id);
ALTER TABLE controle ADD FOREIGN KEY (idstatus) REFERENCES status(id);