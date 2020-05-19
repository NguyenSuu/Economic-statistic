package cg.economic.service.impl;

import cg.economic.model.TypeData;
import cg.economic.repository.TypeDataRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TypeDataService implements IService<TypeData> {
    @Autowired
    private TypeDataRepository typeDataRepository;
    @Override
    public List<TypeData> findAll() {
        return (List<TypeData>)typeDataRepository.findAll();
    }

    @Override
    public TypeData findById(Long id) {
        return typeDataRepository.findById(id).get();
    }

    @Override
    public void save(TypeData object) {
        typeDataRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        typeDataRepository.deleteById(id);
    }
}
