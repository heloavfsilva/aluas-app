package br.com.aluasdev.dao;
import br.com.aluasdev.model.Acesso;
import br.com.aluasdev.model.User;


public interface AcessoService {

  void save(Acesso acesso);
  void update(Acesso acesso);
}
