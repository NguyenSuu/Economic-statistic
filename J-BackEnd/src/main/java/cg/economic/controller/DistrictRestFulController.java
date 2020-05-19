package cg.economic.controller;

import cg.economic.model.District;
import cg.economic.service.impl.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DistrictRestFulController {
    @Autowired
    private DistrictService districtService;

    @GetMapping("/districts")
    public List<District> districtList(){
        return districtService.findAll();
    }


    @GetMapping("/districts/{id}")
    public District district(@PathVariable long id){
        return districtService.findById(id);
    }

    @PostMapping("/districts")
    public District[] addDistrict(@RequestBody District[] districts){
        for (var district :districts){
            districtService.save(district);
        }
        return districts;
    }

    @PatchMapping("/districts")
    public District patchDistrict(@RequestBody District district){
        districtService.save(district);
        return district;
    }

    @DeleteMapping("/districts/{id}")
    public void deleteDistrict(@PathVariable long id){
        districtService.remove(id);
    }


    @DeleteMapping("/districts-remove/{id}")
    public ResponseEntity<District> deleteHttpStatusDistrict(@PathVariable long id){
        districtService.remove(id);
        return new ResponseEntity<District>(HttpStatus.OK);
    }
}
