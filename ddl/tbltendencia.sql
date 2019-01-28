'----------------------------------------------
Criado por: Heloa Silva
Data: 31/12/2018
Descrição: Criação da tabela Tendencia 

Atualização: 
Data		Responsável			Descrição	
31/12/2018	Heloa Silva			Primeira versão
28/01/2019	Heloa Silva			Trigramação
----------------------------------------------'


CREATE TABLE tendencia (
    tdnc_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tdnc_nome VARCHAR(50),
    tdnc_descricao VARCHAR(150)
);
