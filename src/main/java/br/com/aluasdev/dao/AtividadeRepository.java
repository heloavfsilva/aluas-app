package br.com.aluasdev.dao;

import br.com.aluasdev.model.Atividade;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@RepositoryRestResource
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public interface AtividadeRepository extends CrudRepository<Atividade, Long> {
  Atividade findById(int id);
  List<Atividade> findByUsuario(int usuario);
  void deleteById(int id);



}
