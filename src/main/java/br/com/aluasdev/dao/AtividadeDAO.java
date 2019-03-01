package br.com.aluasdev.dao;

import javax.transaction.Transactional;

import br.com.aluasdev.model.Atividade;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public interface AtividadeDAO extends CrudRepository <Atividade, Long> {
  List<Atividade> findById(String titulo);
}
