package cg.economic.service.impl;

import cg.economic.model.QuarterProduction;
import cg.economic.repository.QuarterProductionRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuarterProductionService implements IService<QuarterProduction> {
    @Autowired
    private QuarterProductionRepository repository;

    @Override
    public List<QuarterProduction> findAll() {
        return (List<QuarterProduction>) repository.findAll();
    }

    @Override
    public QuarterProduction findById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public void save(QuarterProduction object) {
        repository.save(object);
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    public QuarterProduction resultEveryQuarter(int quarter, int year) {
        return repository.resultEveryQuarter(quarter, year);
    }
}
