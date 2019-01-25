package br.com.aluasdev.model;

import org.springframework.stereotype.Service;

@Service
public class Atividade{
	private int id;
	private String titulo;
	private String descricao;
	private int idgravidade;
	private int idurgencia;
	private int idtendencia;
	private int idclassificacao;
	private int score;
	private int idcontrole;

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

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getIdgravidade() {
		return idgravidade;
	}

	public void setIdgravidade(int idgravidade) {
		this.idgravidade = idgravidade;
	}

	public int getIdurgencia() {
		return idurgencia;
	}

	public void setIdurgencia(int idurgencia) {
		this.idurgencia = idurgencia;
	}

	public int getIdtendencia() {
		return idtendencia;
	}

	public void setIdtendencia(int idtendencia) {
		this.idtendencia = idtendencia;
	}

	public int getIdclassificacao() {
		return idclassificacao;
	}

	public void setIdclassificacao(int idclassificacao) {
		this.idclassificacao = idclassificacao;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getIdcontrole() {
		return idcontrole;
	}

	public void setIdcontrole(int idcontrole) {
		this.idcontrole = idcontrole;
	}
}
