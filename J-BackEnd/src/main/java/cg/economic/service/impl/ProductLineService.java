package cg.economic.service.impl;

import cg.economic.model.ProductLine;
import cg.economic.repository.ProductLineRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductLineService implements IService<ProductLine> {
    @Autowired
    private ProductLineRepository productLineRepository;
    @Override
    public List<ProductLine> findAll() {
        return (List<ProductLine>)productLineRepository.findAll();
    }

    @Override
    public ProductLine findById(Long id) {
        return productLineRepository.findById(id).get();
    }

    @Override
    public void save(ProductLine object) {
        productLineRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        productLineRepository.deleteById(id);
    }
}
