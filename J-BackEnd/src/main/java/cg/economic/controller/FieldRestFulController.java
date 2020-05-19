package cg.economic.controller;

import cg.economic.model.Field;
import cg.economic.service.impl.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class FieldRestFulController {
    @Autowired
    private FieldService fieldService;

    @GetMapping("/fields")
    public List<Field> fieldList(){
        return fieldService.findAll();
    }


    @GetMapping("/fields/{id}")
    public Field field(@PathVariable long id){
        return fieldService.findById(id);
    }

    @PostMapping("/fields")
    public Field addField(@RequestBody Field field){
        fieldService.save(field);
        return field;
    }

    @PatchMapping("/fields")
    public Field patchField(@RequestBody Field field){
        fieldService.save(field);
        return field;
    }

    @DeleteMapping("/fields/{id}")
    public void deleteField(@PathVariable long id){
        fieldService.remove(id);
    }


    @DeleteMapping("/fields-remove/{id}")
    public ResponseEntity<Field> deleteHttpStatusField(@PathVariable long id){
        fieldService.remove(id);
        return new ResponseEntity<Field>(HttpStatus.OK);
    }
}
