package br.com.aluasdev.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.aluasdev.controller.ConnectionFactory;
import br.com.aluasdev.model.Atividade;

public class AtividadeDAO {
	private Connection connection;
	
	public AtividadeDAO() throws ClassNotFoundException {
		try {
			this.connection = new ConnectionFactory().getConnection();
		} catch (Exception e) {
			 throw new RuntimeException(e);
		}
	}
	public boolean adiciona(Atividade atividade) throws SQLException {
		String sql = "INSERT INTO atividade(titulo,descricao) values(?,?)";
		PreparedStatement stmt = connection.prepareStatement(sql);
		stmt.setString(1, "titlo");
		stmt.setString(2, "x");
		return stmt.execute();
		
	}
}
