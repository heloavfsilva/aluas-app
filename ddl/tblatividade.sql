'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Atividade 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
----------------------------------------------'

CREATE TABLE atividade (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    descricao VARCHAR(150),
    idgravidade INTEGER,
    idurgencia INTEGER,
    idtendencia INTEGER,
    idclassificacao INTEGER,
    score INTEGER,
    idcontrole INTEGER
);

ALTER TABLE atividade ADD FOREIGN KEY (idgravidade) REFERENCES gravidade (id);
ALTER TABLE atividade ADD FOREIGN KEY (idurgencia) REFERENCES urgencia (id);
ALTER TABLE atividade ADD FOREIGN KEY (idtendencia) REFERENCES tendencia (id);
ALTER TABLE atividade ADD FOREIGN KEY (idclassificacao) REFERENCES classificacao (id);
ALTER TABLE atividade ADD FOREIGN KEY (idcontrole) REFERENCES controle (id);

