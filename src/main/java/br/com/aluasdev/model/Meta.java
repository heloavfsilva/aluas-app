package br.com.aluasdev.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "meta")
public class Meta {

  @Id
  @Column(name = "meta_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "meta_score")
  private int metaScore;

  @Column(name = "usu_id")
  private int usuario;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getMetaScore() {
    return metaScore;
  }

  public void setMetaScore(int metaScore) {
    this.metaScore = metaScore;
  }

  public int getUsuario() {
    return usuario;
  }

  public void setUsuario(int usuario) {
    this.usuario = usuario;
  }
}
