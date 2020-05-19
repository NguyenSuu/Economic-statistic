package cg.economic.model;

import javax.persistence.*;

@Entity
@Table(name = "type_data")
public class TypeData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private String name;
    public TypeData(){

    }
    @ManyToOne
    @JoinColumn(name = "monthlyProduction_id")
    private MonthlyProduction monthlyProductions;

    public MonthlyProduction getMonthlyProductions() {
        return monthlyProductions;
    }

    public void setMonthlyProductions(MonthlyProduction monthlyProductions) {
        this.monthlyProductions = monthlyProductions;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
