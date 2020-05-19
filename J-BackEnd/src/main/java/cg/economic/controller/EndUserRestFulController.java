package cg.economic.controller;

import cg.economic.model.MonthlyProduction;
import cg.economic.model.QuarterProduction;
import cg.economic.service.impl.MonthlyProductionService;
import cg.economic.service.impl.QuarterProductionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EndUserRestFulController {

    @Autowired
    private MonthlyProductionService monthlyProductionService;
    @Autowired
    private QuarterProductionService quarterService;

    @GetMapping("/monthly-production/{month}/{year}")
    public MonthlyProduction resultEveryMonth(@PathVariable("month")int month, @PathVariable("year")int year){
        return monthlyProductionService.resultEveryMonth(month,year);
    }
    @GetMapping("/quarter-production/{quarter}/{year}")
    public QuarterProduction resultEveryQuarter(@PathVariable("quarter")int quarter, @PathVariable("year")int year){
        return quarterService.resultEveryQuarter(quarter,year);
    }

}
