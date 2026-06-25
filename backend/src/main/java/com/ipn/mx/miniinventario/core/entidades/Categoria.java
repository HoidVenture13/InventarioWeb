package com.ipn.mx.miniinventario.core.entidades;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Categoria")
public class Categoria implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long idCategoria;

    @NotBlank(message = "El nombre de la categoria es obligatorio")
    @Size(max = 50, message = "El nombre no puede exceder 50 caracteres")
    @Column(nullable = false, length = 50)
    private String nombreCategoria;

    @NotBlank(message = "La descripcion de la categoria es obligatoria")
    @Size(max = 100, message = "La descripcion no puede exceder 100 caracteres")
    @Column(nullable = false, length = 100)
    private String descripcionCategoria;

    @Column(name = "create_at")
    private LocalDate createAt;

    @JsonIgnore
    @OneToMany(mappedBy = "idCategoria", cascade = CascadeType.ALL)
    private Set<Producto> productos = new HashSet<>();

    public Categoria(Long idCategoria) {
        this.idCategoria = idCategoria;
    }
}
