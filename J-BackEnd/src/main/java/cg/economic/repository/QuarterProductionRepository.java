package cg.economic.repository;

import cg.economic.model.QuarterProduction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuarterProductionRepository extends CrudRepository<QuarterProduction,Long> {
    @Query("SELECT q " +
            "FROM QuarterProduction q " +
            "WHERE q.quarter=:quarter AND q.year=:year")
    QuarterProduction resultEveryQuarter(@Param("quarter")int quarter, @Param("year")int year);
}
