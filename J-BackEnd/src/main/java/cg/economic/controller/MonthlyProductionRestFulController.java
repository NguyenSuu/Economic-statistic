package cg.economic.controller;

import cg.economic.model.MonthlyProduction;
import cg.economic.model.Product;
import cg.economic.service.impl.MonthlyProductionService;
import cg.economic.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MonthlyProductionRestFulController {
    @Autowired
    private MonthlyProductionService monthlyProductionService;
    @Autowired
    private ProductService productService;
    @GetMapping("/monthly-production")
    public List<MonthlyProduction> monthlyProductionList(){
        return monthlyProductionService.findAll();
    }


    @GetMapping("/monthly-production/{id}")
    public MonthlyProduction monthlyProduction(@PathVariable long id){
        return monthlyProductionService.findById(id);
    }

    @PostMapping("/monthly-production")
    public MonthlyProduction[] addMonthlyProduction(@RequestBody MonthlyProduction[] monthlyProduction){
        for(var mProduction:monthlyProduction){
            Product product=productService.findById(mProduction.getP_id());
            mProduction.setProducts(product);
            monthlyProductionService.save(mProduction);
        }
        return monthlyProduction;
    }

    @PatchMapping("/monthly-production")
    public MonthlyProduction patchMonthlyProduction(@RequestBody MonthlyProduction monthlyProduction){
        monthlyProductionService.save(monthlyProduction);
        return monthlyProduction;
    }

    @DeleteMapping("/monthly-production/{id}")
    public void deleteMonthlyProduction(@PathVariable long id){
        monthlyProductionService.remove(id);
    }


    @DeleteMapping("/monthly-production-remove/{id}")
    public ResponseEntity<MonthlyProduction> deleteHttpStatusMonthlyProduction(@PathVariable long id){
        monthlyProductionService.remove(id);
        return new ResponseEntity<MonthlyProduction>(HttpStatus.OK);
    }
}
