package com.ipn.mx.miniinventario.features.categoria.controller;

import com.ipn.mx.miniinventario.core.entidades.Categoria;
import com.ipn.mx.miniinventario.features.categoria.service.CategoriaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "https://proyecto-angular-clase2.vercel.app", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1/categorias")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping("/categoria")
    @ResponseStatus(HttpStatus.OK)
    public List<Categoria> findAll() {
        return categoriaService.findAll();
    }

    @GetMapping("/categoria/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Categoria findById(@PathVariable Long id) {
        return categoriaService.findById(id);
    }

    @PostMapping("/categoria")
    @ResponseStatus(HttpStatus.CREATED)
    public Categoria create(@Valid @RequestBody Categoria categoria) {
        return categoriaService.save(categoria);
    }

    @PutMapping("/categoria/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Categoria update(@Valid @RequestBody Categoria categoria, @PathVariable Long id) {
        Categoria existente = categoriaService.findById(id);
        existente.setNombreCategoria(categoria.getNombreCategoria());
        existente.setDescripcionCategoria(categoria.getDescripcionCategoria());
        return categoriaService.save(existente);
    }

    @DeleteMapping("/categoria/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categoriaService.deleteById(id);
    }
}
