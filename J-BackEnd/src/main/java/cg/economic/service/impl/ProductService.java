package cg.economic.service.impl;

import cg.economic.model.Product;
import cg.economic.repository.ProductRepository;
import cg.economic.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductService implements IService<Product> {
    @Autowired
    private ProductRepository productRepository;
    @Override
    public List<Product> findAll() {
        return (List<Product>)productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public void save(Product object) {
        productRepository.save(object);
    }

    @Override
    public void remove(Long id) {
        productRepository.deleteById(id);
    }

}
