package br.com.aluasdev.dao;

import br.com.aluasdev.model.Acesso;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@RepositoryRestResource
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public interface AcessoRepository extends CrudRepository<Acesso, Long> {
  List<Acesso> findById(int id);

  Acesso findByUsername(String username);

  void deleteById(int id);
}

