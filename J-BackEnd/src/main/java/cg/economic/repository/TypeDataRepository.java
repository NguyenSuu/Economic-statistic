package cg.economic.repository;

import cg.economic.model.TypeData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDataRepository extends CrudRepository<TypeData,Long> {

}
