package br.com.aluasdev.model;

import org.springframework.stereotype.Service;

@Service
public class Atividade{
	private int id;
	private String tvdd_titulo;
	private String tvdd_description;
	private int gvdd_id;
	private int rgnc_id;
	private int tdnc_id;
	private int cfcs_id;
	private int tvdd_score;
	private int ctrl_id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

  public String getTvdd_titulo() {
    return tvdd_titulo;
  }

  public void setTvdd_titulo(String tvdd_titulo) {
    this.tvdd_titulo = tvdd_titulo;
  }

  public String getTvdd_description() {
    return tvdd_description;
  }

  public void setTvdd_description(String tvdd_description) {
    this.tvdd_description = tvdd_description;
  }

  public int getGvdd_id() {
    return gvdd_id;
  }

  public void setGvdd_id(int gvdd_id) {
    this.gvdd_id = gvdd_id;
  }

  public int getRgnc_id() {
    return rgnc_id;
  }

  public void setRgnc_id(int rgnc_id) {
    this.rgnc_id = rgnc_id;
  }

  public int getTdnc_id() {
    return tdnc_id;
  }

  public void setTdnc_id(int tdnc_id) {
    this.tdnc_id = tdnc_id;
  }

  public int getCfcs_id() {
    return cfcs_id;
  }

  public void setCfcs_id(int cfcs_id) {
    this.cfcs_id = cfcs_id;
  }

  public int getTvdd_score() {
    return tvdd_score;
  }

  public void setTvdd_score(int tvdd_score) {
    this.tvdd_score = tvdd_score;
  }

  public int getCtrl_id() {
    return ctrl_id;
  }

  public void setCtrl_id(int ctrl_id) {
    this.ctrl_id = ctrl_id;
  }
}
