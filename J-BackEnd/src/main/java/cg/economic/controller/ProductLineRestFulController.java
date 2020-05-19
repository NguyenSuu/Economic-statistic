package cg.economic.controller;


import cg.economic.model.Field;
import cg.economic.model.ProductLine;
import cg.economic.service.impl.FieldService;
import cg.economic.service.impl.ProductLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductLineRestFulController {
    @Autowired
    private ProductLineService productLineService;
    @Autowired
    private FieldService fieldService;

    @GetMapping("/product-line")
    public List<ProductLine> productLineList() {
        return productLineService.findAll();
    }


    @GetMapping("/product-line/{id}")
    public ProductLine productLine(@PathVariable long id) {
        return productLineService.findById(id);
    }

    @PostMapping("/product-line")
    public ProductLine[] addProductLine(@RequestBody ProductLine[] productLines) {
        for (var productLine : productLines) {
            Field field = fieldService.findById(productLine.getF_id());
            productLine.setField(field);
            productLineService.save(productLine);
        }
        return productLines;
    }

    @PatchMapping("/product-line")
    public ProductLine patchProductLine(@RequestBody ProductLine productLine) {
            productLine.setField(fieldService.findById(productLine.getF_id()));
            productLineService.save(productLine);
        return productLine;
    }

    @DeleteMapping("/product-line/{id}")
    public void deleteProductLine(@PathVariable long id) {
        productLineService.remove(id);
    }


    @DeleteMapping("/product-line-remove/{id}")
    public ResponseEntity<ProductLine> deleteHttpStatusProductLine(@PathVariable long id) {
        productLineService.remove(id);
        return new ResponseEntity<ProductLine>(HttpStatus.OK);
    }
}
