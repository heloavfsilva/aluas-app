package br.com.aluasdev.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "usuario")
public class User {

  @Id
  @Column(name = "usu_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "usu_primeiro_nome")
  private String primeiroNome;

  @Column(name = "usu_sobrenome")
  private String sobrenome;

  @Column(name = "usu_username")
  private String username;

  @Column(name = "usu_email")
  private String email;

  @Column(name = "usu_senha")
  private String password;

  @Column(name = "usu_telefone")
  private String telefone;

  @Column(name = "usu_foto")
  private String foto;

  @Column(name = "usu_score_acumulado")
  private int scoreAcumulado;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getPrimeiroNome() {
    return primeiroNome;
  }

  public void setPrimeiroNome(String primeiroNome) {
    this.primeiroNome = primeiroNome;
  }

  public String getSobrenome() {
    return sobrenome;
  }

  public void setSobrenome(String sobrenome) {
    this.sobrenome = sobrenome;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String senha) {
    this.password = senha;
  }

  public String getTelefone() {
    return telefone;
  }

  public void setTelefone(String telefone) {
    this.telefone = telefone;
  }

  public String getFoto() {
    return foto;
  }

  public void setFoto(String foto) {
    this.foto = foto;
  }

  public int getScoreAcumulado() {
    return scoreAcumulado;
  }

  public void setScoreAcumulado(int scoreAcumulado) {
    this.scoreAcumulado = scoreAcumulado;
  }

}
