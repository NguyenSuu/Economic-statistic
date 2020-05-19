package cg.economic.repository;

import cg.economic.model.ProductLine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLineRepository extends CrudRepository<ProductLine,Long> {
}
