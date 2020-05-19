package cg.economic.controller;


import cg.economic.model.Product;
import cg.economic.service.impl.ProductLineService;
import cg.economic.service.impl.ProductService;
import cg.economic.service.impl.UnitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductRestFulController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductLineService productLineService;
    @Autowired
    private UnitsService unitsService;

    @GetMapping("/products")
    public List<Product> productList() {
        return productService.findAll();
    }


    @GetMapping("/products/{id}")
    public Product product(@PathVariable long id) {
        return productService.findById(id);
    }

    @PostMapping("/products")
    public Product[] addProduct(@RequestBody Product[] products) {
        for (var product : products) {
            product.setProductLine(productLineService.findById(product.getpL_id()));
            product.setUnits(unitsService.findById(product.getU_id()));
            productService.save(product);
        }
        return products;
    }

    @PatchMapping("/products")
    public Product patchProduct(@RequestBody Product product) {
        product.setUnits(unitsService.findById(product.getU_id()));
        product.setProductLine(productLineService.findById(product.getpL_id()));
        productService.save(product);
        return product;
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable long id) {
        productService.remove(id);
    }


    @DeleteMapping("/products-remove/{id}")
    public ResponseEntity<Product> deleteHttpStatusProduct(@PathVariable long id) {
        productService.remove(id);
        return new ResponseEntity<Product>(HttpStatus.OK);
    }
}