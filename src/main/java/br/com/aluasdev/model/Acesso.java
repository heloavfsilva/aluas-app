package br.com.aluasdev.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "acesso")
public class Acesso {

  @Id
  @Column(name = "acesso_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "usu_username")
  private String username;

  @Column(name = "acesso_entrada")
  private String entrada;

  @Column(name = "acesso_saida")
  private String saida;

  @Column(name = "acesso_token")
  private String token;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEntrada() {
    return entrada;
  }

  public void setEntrada(String entrada) {
    this.entrada = entrada;
  }

  public String getSaida() {
    return saida;
  }

  public void setSaida(String saida) {
    this.saida = saida;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }
}
