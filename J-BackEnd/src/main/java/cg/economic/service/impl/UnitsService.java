package cg.economic.service.impl;

import cg.economic.model.Units;
import cg.economic.repository.UnitsRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UnitsService implements IService<Units> {
    @Autowired
    private UnitsRepository unitsRepository;
    @Override
    public List<Units> findAll() {
        return (List<Units>)unitsRepository.findAll();
    }

    @Override
    public Units findById(Long id) {
        return unitsRepository.findById(id).get();
    }

    @Override
    public void save(Units object) {
        unitsRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        unitsRepository.deleteById(id);
    }
}
