package br.com.aluasdev.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "atividade")
public class Atividade {

  @Id
  @Column(name = "tvdd_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "tvdd_titulo")
  private String titulo;

  @Column(name = "tvdd_descricao")
  private String descricao;

  @Column(name = "gvdd_id")
  private int gravidade;

  @Column(name = "rgnc_id")
  private int urgencia;

  @Column(name = "tdnc_id")
  private int tendencia;

  @Column(name = "cfcs_id")
  private int classificacao;

  @Column(name = "tvdd_score")
  private int score;

  public Atividade (){}

  public Atividade(String titulo, String descricao) {
    this.titulo = titulo;
    this.descricao = descricao;

  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String description) {
    this.descricao = description;
  }

  public int getGravidade() {
    return gravidade;
  }

  public void setGravidade(int gravidade) {
    this.gravidade = gravidade;
  }

  public int getUrgencia() {
    return urgencia;
  }

  public void setUrgencia(int urgencia) {
    this.urgencia = urgencia;
  }

  public int getTendencia() {
    return tendencia;
  }

  public void setTendencia(int tendencia) {
    this.tendencia = tendencia;
  }

  public int getClassificacao() {
    return classificacao;
  }

  public void setClassificacao(int classificacao) {
    this.classificacao = classificacao;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }

}
