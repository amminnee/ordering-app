package ma.order.analysis.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String name;
    private String image;
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;
    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private List<Item> items;
    private boolean deleted;
    @Transient
    private int itemsNum;

    @PrePersist
    protected void onCreate() {
        this.created = new Date();
    }
    public int getItemsNum() {
        return this.items.stream().filter(item -> !item.isDeleted()).toList().size();
    }
}
