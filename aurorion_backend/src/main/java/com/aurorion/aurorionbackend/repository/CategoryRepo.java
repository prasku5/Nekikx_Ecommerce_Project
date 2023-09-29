package com.aurorion.aurorionbackend.repository;

import com.aurorion.aurorionbackend.model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends CrudRepository<Category, Integer> {

        @Override
        <S extends Category> S save(S entity);
}
