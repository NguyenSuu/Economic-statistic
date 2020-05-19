package cg.economic.repository;

import cg.economic.model.Units;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitsRepository extends CrudRepository<Units,Long> {
}
