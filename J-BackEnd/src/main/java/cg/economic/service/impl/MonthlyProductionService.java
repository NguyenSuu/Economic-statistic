package cg.economic.service.impl;

import cg.economic.model.MonthlyProduction;
import cg.economic.repository.MonthlyProductionRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MonthlyProductionService implements IService<MonthlyProduction> {
    @Autowired
    private MonthlyProductionRepository monthlyProductionRepository;
    @Override
    public List<MonthlyProduction> findAll() {
        return (List<MonthlyProduction>)monthlyProductionRepository.findAll();
    }

    @Override
    public MonthlyProduction findById(Long id) {
        return monthlyProductionRepository.findById(id).get();
    }

    @Override
    public void save(MonthlyProduction object) {
        monthlyProductionRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        monthlyProductionRepository.deleteById(id);
    }

    public MonthlyProduction resultEveryMonth(int month, int year) {
        return monthlyProductionRepository.resultEveryMonth(month,year);
    }

}
