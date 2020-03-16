package com.laboratorio.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.laboratorio.demo.dtos.EmpresaDto;
import com.laboratorio.demo.dtos.NoticiaDto;
import com.laboratorio.demo.entities.Empresa;
import com.laboratorio.demo.entities.Noticia;
import com.laboratorio.demo.repositories.EmpresaRepository;
import com.laboratorio.demo.repositories.NoticiaRepository;

@Service
public class NoticiaService {
	
	private final NoticiaRepository repository;
	private final EmpresaRepository repositorio2;
	
	public NoticiaService(NoticiaRepository repository, EmpresaRepository repositorio2) {
		this.repository = repository;
		this.repositorio2 = repositorio2;
		
	}
	
	@Transactional
	public List<NoticiaDto> buscarPorNombre(String consulta) throws Exception{
		try {
			List<Noticia> entities = repository.buscarPorNombre(consulta);
			List<NoticiaDto> dtos = new ArrayList();
			for(Noticia i:entities) {
				NoticiaDto unDto = new NoticiaDto();
				unDto.setId(i.getId());
				unDto.setTitulo_de_la_noticia(i.getTitulo_de_la_noticia());
				unDto.setResumen_de_la_noticia(i.getResumen_de_la_noticia());
				unDto.setImagen_noticia(i.getImagen_noticia());
				unDto.setContenido_html(i.getContenido_html());
				unDto.setPublicada(i.getPublicada());
				unDto.setFecha_publicacion(i.getFecha_publicacion());
				unDto.setIdEmpresa(i.getIdEmpresa().getId());
				dtos.add(unDto);
			}
			return dtos;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	
	@Transactional
	public List<NoticiaDto> findAll() throws Exception{
		try {
			List<Noticia> entities = repository.findAll();
			List<NoticiaDto> dtos = new ArrayList();
			for(Noticia i:entities) {
				NoticiaDto unDto = new NoticiaDto();
				unDto.setId(i.getId());
				unDto.setTitulo_de_la_noticia(i.getTitulo_de_la_noticia());
				unDto.setResumen_de_la_noticia(i.getResumen_de_la_noticia());
				unDto.setImagen_noticia(i.getImagen_noticia());
				unDto.setContenido_html(i.getContenido_html());
				unDto.setPublicada(i.getPublicada());
				unDto.setFecha_publicacion(i.getFecha_publicacion());
				unDto.setIdEmpresa(i.getIdEmpresa().getId());
				dtos.add(unDto);
			}
			return dtos;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	 
	
	@Transactional 
	public NoticiaDto save(NoticiaDto dto) throws Exception{
		try {
			Noticia entidad = new Noticia();
			entidad.setTitulo_de_la_noticia(dto.getTitulo_de_la_noticia());
			entidad.setResumen_de_la_noticia(dto.getResumen_de_la_noticia());
			entidad.setImagen_noticia(dto.getImagen_noticia());
			entidad.setContenido_html(dto.getContenido_html());
			entidad.setPublicada(dto.getPublicada());
			entidad.setFecha_publicacion(dto.getFecha_publicacion());
			
			Optional<Empresa> optionalEntity = repositorio2.findById(dto.getIdEmpresa());
			Empresa empresa = optionalEntity.get();
			entidad.setIdEmpresa(empresa);
			
			entidad = repository.save(entidad);
			dto.setId(entidad.getId());
			return dto;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	
	@Transactional
	public NoticiaDto update (int id, NoticiaDto dto) throws Exception{
		Optional<Noticia> entityOptional = repository.findById(id);
		try {
			Noticia entidad = entityOptional.get();
			entidad.setId(dto.getId());
			entidad.setTitulo_de_la_noticia(dto.getTitulo_de_la_noticia());
			entidad.setResumen_de_la_noticia(dto.getResumen_de_la_noticia());
			entidad.setImagen_noticia(dto.getImagen_noticia());
			entidad.setContenido_html(dto.getContenido_html());
			entidad.setPublicada(dto.getPublicada());
			entidad.setFecha_publicacion(dto.getFecha_publicacion());
			Optional<Empresa> optionalEntity = repositorio2.findById(dto.getIdEmpresa());
			Empresa empresa = optionalEntity.get();
			entidad.setIdEmpresa(empresa);
			
			entidad = repository.save(entidad);
			dto.setId(entidad.getId());
			return dto;
			
		}catch(Exception e) {
			throw new Exception();
		}
	}
	
	@Transactional
	public boolean delete(int id) throws Exception{
		
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return true;
		}else {
			throw new Exception();
		}
	}
	
	@Transactional
	public NoticiaDto findById(int id)throws Exception{
		Optional<Noticia> entityOptional = repository.findById(id);
		try {
			Noticia entity = entityOptional.get();
			NoticiaDto unDto = new NoticiaDto();
			unDto.setId(entity.getId());
			unDto.setTitulo_de_la_noticia(entity.getTitulo_de_la_noticia());
			unDto.setResumen_de_la_noticia(entity.getResumen_de_la_noticia());
			unDto.setImagen_noticia(entity.getImagen_noticia());
			unDto.setContenido_html(entity.getContenido_html());
			unDto.setPublicada(entity.getPublicada());
			unDto.setFecha_publicacion(entity.getFecha_publicacion());
			unDto.setIdEmpresa(entity.getIdEmpresa().getId());
			return unDto;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	
}
