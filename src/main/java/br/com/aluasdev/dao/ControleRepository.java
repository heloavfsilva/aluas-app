package br.com.aluasdev.dao;

import br.com.aluasdev.model.Controle;
import br.com.aluasdev.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@RepositoryRestResource
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public interface ControleRepository extends CrudRepository<Controle, Long> {
  Controle findByAtividade(int atividade);
  List<Controle> findByUsuario(int usuario);

}

