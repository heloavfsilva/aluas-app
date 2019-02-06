package br.com.aluasdev.controller;
import java.sql.Connection;
import java.sql.SQLException;

public class TestaConnection {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		Connection conn = new ConnectionFactory().getConnection();
		System.out.println("Conexao aberta");
		conn.close();
	}
}
