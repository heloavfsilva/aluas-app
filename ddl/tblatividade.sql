'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Atividade 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
07/03/2019	Heloa Silva			Drop column ctrl_id from controle
12/03/2019	Heloa Silva			Add column usu_id from usuário
----------------------------------------------'

CREATE TABLE atividade (
    tvdd_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tvdd_titulo VARCHAR(50),
    tvdd_descricao VARCHAR(150),
    gvdd_id INTEGER,
    rgnc_id INTEGER,
    tdnc_id INTEGER,
    cfcs_id INTEGER,
    tvdd_score INTEGER,
	usu_id INTEGER,
	status VARCHAR(30)
);

ALTER TABLE atividade ADD FOREIGN KEY (gvdd_id) REFERENCES gravidade (gvdd_id);
ALTER TABLE atividade ADD FOREIGN KEY (rgnc_id) REFERENCES urgencia (rgnc_id);
ALTER TABLE atividade ADD FOREIGN KEY (tdnc_id) REFERENCES tendencia (tdnc_id);
ALTER TABLE atividade ADD FOREIGN KEY (cfcs_id) REFERENCES classificacao (cfcs_id);
