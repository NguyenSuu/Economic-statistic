package cg.economic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private String name;
    private Long pL_id;
    private Long u_id;

    @JsonIgnore
    @OneToMany
    private Set<MonthlyProduction> monthlyProduction;

    public Set<MonthlyProduction> getMonthlyProduction() {
        return monthlyProduction;
    }

    public void setMonthlyProduction(Set<MonthlyProduction> monthlyProduction) {
        this.monthlyProduction = monthlyProduction;
    }

    @ManyToOne
    @JoinColumn(name = "product_line_id")
    private ProductLine productLine;

    public ProductLine getProductLine() {
        return productLine;
    }

    public void setProductLine(ProductLine productLine) {
        this.productLine = productLine;
    }


    @ManyToOne
    @JoinColumn(name = "units_id")
    private Units units;

    public Units getUnits() {
        return units;
    }

    public void setUnits(Units units) {
        this.units = units;
    }

    public Product(){

    }

    public Long getU_id() {
        return u_id;
    }

    public void setU_id(Long u_id) {
        this.u_id = u_id;
    }

    public Long getpL_id() {
        return pL_id;
    }

    public void setpL_id(Long pL_id) {
        this.pL_id = pL_id;
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
