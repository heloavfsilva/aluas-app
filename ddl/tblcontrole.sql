'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Controle 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'

CREATE TABLE controle (
    ctrl_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tvdd_id INTEGER,
    usu_id INTEGER,
    stts_id INTEGER,
    ctrl_descricao VARCHAR(150),
    ctrl_date DATETIME
);

ALTER TABLE controle ADD FOREIGN KEY (tvdd_id) REFERENCES atividade(tvdd_id);
ALTER TABLE controle ADD FOREIGN KEY (usu_id) REFERENCES usuario(usu_id);
ALTER TABLE controle ADD FOREIGN KEY (stts_id) REFERENCES status(stts_id);
