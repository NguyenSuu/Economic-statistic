package cg.economic.controller;

import cg.economic.model.Units;
import cg.economic.service.impl.UnitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UnitsRestFulController {
    @Autowired
    private UnitsService unitsService;

    @GetMapping(value = "/units")
    public List<Units> unitsList(){
        return unitsService.findAll();
    }


    @GetMapping("/units/{id}")
    public Units units(@PathVariable long id){
        return unitsService.findById(id);
    }

    @PostMapping("/units")
    public Units addUnits(@RequestBody Units units){
        unitsService.save(units);
        return units;
    }

    @PatchMapping("/units")
    public Units patchUnits(@RequestBody Units units){
        unitsService.save(units);
        return units;
    }

    @DeleteMapping("/units/{id}")
    public void deleteUnits(@PathVariable long id){
        unitsService.remove(id);
    }


    @DeleteMapping("/units-remove/{id}")
    public ResponseEntity<Units> deleteHttpStatusUnits(@PathVariable long id){
        unitsService.remove(id);
        return new ResponseEntity<Units>(HttpStatus.OK);
    }
}
