package cg.economic.service.impl;

import cg.economic.model.Field;
import cg.economic.repository.FieldRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FieldService implements IService<Field> {
    @Autowired
    private FieldRepository fieldRepository;
    @Override
    public List<Field> findAll() {
        return (List<Field>)fieldRepository.findAll();
    }

    @Override
    public Field findById(Long id) {
        return fieldRepository.findById(id).get();
    }

    @Override
    public void save(Field object) {
        fieldRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        fieldRepository.deleteById(id);
    }
}
