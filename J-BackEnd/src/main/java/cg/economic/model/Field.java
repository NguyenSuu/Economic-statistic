package cg.economic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "field")
public class Field {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "field",fetch = FetchType.EAGER)
    private Set<ProductLine> productLines;

    public Set<ProductLine> getProductLines() {
        return productLines;
    }

    public void setProductLines(Set<ProductLine> productLines) {
        this.productLines = productLines;
    }

    public Field(){

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
