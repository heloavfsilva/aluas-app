package br.com.aluasdev.dao;

import javax.transaction.Transactional;

import br.com.aluasdev.model.Atividade;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@Transactional
public interface AtividadeDAO extends CrudRepository <Atividade, Long> {
  List<Atividade> findById(String lastName);
}
