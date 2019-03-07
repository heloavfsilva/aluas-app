package br.com.aluasdev.dao;
import br.com.aluasdev.model.User;

import java.util.List;


public interface UserService {

  User save(User user);
  List<User> findAll();
  void delete(long id);
  User findByEmail(String email);
  User findById(Long id);
}
