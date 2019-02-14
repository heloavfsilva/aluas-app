package br.com.aluasdev.dao;
import br.com.aluasdev.model.Atividade;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

@Repository
public abstract class AtividadeRepository implements JpaRepository<Atividade, Long> {

  @PersistenceContext
  //private EntityManager entityManager ;
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("manager");
    EntityManager em = emf.createEntityManager();


  @Transactional
  public void add(Atividade atividade) {
    em.createNativeQuery("INSERT INTO atividade (tvdd_titulo, tvdd_descricao) VALUES (?,?)")
      .setParameter(1, atividade.getTitulo())
      .setParameter(2, atividade.getDescricao())
      .executeUpdate();
    em.persist(atividade);
    em.close();
    emf.close();
  }

}
