package br.com.aluasdev.dao;
import br.com.aluasdev.model.Atividade;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class AtividadeRepository {

  @PersistenceContext
  private EntityManager entityManager;


  @Transactional
  public void add(Atividade atividade) {
    entityManager.createNativeQuery("INSERT INTO atividade (tvdd_titulo, tvdd_descricao) VALUES (?,?)")
      .setParameter(1, atividade.getTitulo())
      .setParameter(2, atividade.getDescription())
      .executeUpdate();
    this.entityManager.persist(atividade);
  }

}
