package cg.economic.repository;

import cg.economic.model.MonthlyProduction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface  MonthlyProductionRepository extends CrudRepository<MonthlyProduction,Long> {
    @Query("SELECT m " +
            "FROM MonthlyProduction m " +
            "WHERE m.month=:month AND m.year=:year")
    MonthlyProduction resultEveryMonth(@Param("month")int month, @Param("year")int year);


}
