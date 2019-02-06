package br.com.aluasdev.controller;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	public Connection getConnection() throws ClassNotFoundException {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			return DriverManager.getConnection("jdbc:mysql://localhost:3306/aluasdb?useTimezone=true&serverTimezone=UTC","root","root");
		}catch(SQLException excecao){
			throw new RuntimeException(excecao); 
			
		}
	}
}
