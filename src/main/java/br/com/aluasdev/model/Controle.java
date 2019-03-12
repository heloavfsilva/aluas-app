package br.com.aluasdev.model;

import javax.persistence.*;

@Entity
@Table(name = "controle")
public class Controle {

  @Id
  @Column(name = "ctrl_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "tvdd_id")
  private int atividade;

  @Column(name = "usu_id")
  private int usuario;

  @Column(name = "status")
  private String status;

  @Column(name = "ctrl_date")
  private String data;


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getAtividade() {
    return atividade;
  }

  public void setAtividade(int atividade) {
    this.atividade = atividade;
  }

  public int getUsuario() {
    return usuario;
  }

  public void setUsuario(int usuario) {
    this.usuario = usuario;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getData() {
    return data;
  }

  public void setData(String data) {
    this.data = data;
  }
}
