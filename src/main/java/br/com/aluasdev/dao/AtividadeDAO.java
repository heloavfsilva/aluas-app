package br.com.aluasdev.dao;
import org.springframework.data.repository.Repository;
import java.util.List;


public interface AtividadeDAO extends Repository {

  void delete(User user);

  List findAll();

  User findOne(int id);

  User save(User user);
}

/*	public boolean adiciona(Atividade atividade) throws SQLException {
		String sql = "INSERT INTO atividade(titulo,descricao) values(?,?)";
		PreparedStatement stmt = connection.prepareStatement(sql);
		stmt.setString(1, "titlo");
		stmt.setString(2, "x");
		return stmt.execute();

	}*/
