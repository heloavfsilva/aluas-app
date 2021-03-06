﻿'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Controle 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
28/02/2019  	Heloa Silva			Update the field stts_id to status, 
								delete the table tblstatus
12/03/2019	Heloa Silva			Remove column ctrl_descricao	
12/03/2019	Heloa Silva			Remove tabela controle				
----------------------------------------------'

CREATE TABLE controle (
    ctrl_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tvdd_id INTEGER,
    usu_id INTEGER,
    status VARCHAR(30),
    ctrl_date DATETIME
);

ALTER TABLE controle ADD FOREIGN KEY (tvdd_id) REFERENCES atividade(tvdd_id);
ALTER TABLE controle ADD FOREIGN KEY (usu_id) REFERENCES usuario(usu_id);
