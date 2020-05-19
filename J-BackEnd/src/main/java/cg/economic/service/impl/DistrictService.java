package cg.economic.service.impl;

import cg.economic.model.District;
import cg.economic.repository.DistrictRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DistrictService implements IService<District> {
    @Autowired
    private DistrictRepository districtRepository;
    @Override
    public List<District> findAll() {
        return (List<District>)districtRepository.findAll();
    }

    @Override
    public District findById(Long id) {
        return districtRepository.findById(id).get();
    }

    @Override
    public void save(District object) {
        districtRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        districtRepository.deleteById(id);
    }
}