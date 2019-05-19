package br.com.aluasdev.dao;

import br.com.aluasdev.model.Meta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;

@RepositoryRestResource
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public interface MetaRepository extends CrudRepository<Meta, Long> {
  Meta findById(int id);

  Meta findByUsuario(int usuario);

  void deleteById(int id);
}

