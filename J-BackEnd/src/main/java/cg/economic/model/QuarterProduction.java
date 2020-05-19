package cg.economic.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "quarter_production")
public class QuarterProduction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int quarter;
    private int year;
    public QuarterProduction(){

    }

    @OneToMany(mappedBy = "quarterProduction",fetch = FetchType.EAGER)
    private Set<MonthlyProduction> monthlyProductions;

    public Set<MonthlyProduction> getMonthlyProductions() {
        return monthlyProductions;
    }

    public void setMonthlyProductions(Set<MonthlyProduction> monthlyProductions) {
        this.monthlyProductions = monthlyProductions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuarter() {
        return quarter;
    }

    public void setQuarter(int quarter) {
        this.quarter = quarter;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
