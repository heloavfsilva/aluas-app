package br.com.aluasdev.dao;
import br.com.aluasdev.model.Meta;

import java.util.List;


public interface MetaService {

  Meta save(Meta meta);
  List<Meta> findAll();
  void delete(long id);
  Meta findByUsuario(int usuario);
  Meta findById(Long id);
}
