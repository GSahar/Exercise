package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.exception.InternalServerError;
import com.example.model.DocDetail;
import com.example.repository.DocDetailRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/documents/detail")
public class DocDetailController {

	@Autowired
	DocDetailRepository docDetailRepository;

	//Создание записи
	@PostMapping
	public ResponseEntity<String> save(@RequestBody DocDetail detail) {

		try {
			var docId = docDetailRepository.save(detail);

			return new ResponseEntity<String>
			 ("Document detail successfully created , Id =" 
			    + docId, HttpStatus.CREATED);
			
		} catch (Exception e) {
			throw new InternalServerError(e.getMessage());
		}
	}

	//Получение списка детализации по идентификатору документа
	@GetMapping("/values/{id_doc}")
	public ResponseEntity<List<DocDetail>> getAll
		(@PathVariable("id_doc") Long id_doc) {
			
		return new ResponseEntity<List<DocDetail>>
			(docDetailRepository.findAll(id_doc), HttpStatus.OK);
	
	}

	//Получение детализации по идентификатору
	@GetMapping("/value/{id}")
	public ResponseEntity<DocDetail> getById
	    (@PathVariable("id") Long id) {

		return new ResponseEntity<>
		   (docDetailRepository.findOne(id), HttpStatus.OK);

	}

	// Удаление детализации документа
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteDetail
	     (@PathVariable("id") Long id) {

			docDetailRepository.delete(docDetailRepository.findOne(id).id());

		return new ResponseEntity<>
		   ("Document detail removed successfully", HttpStatus.OK);

	}

	// Обновление детализации документа
	@PutMapping("/{id}")
	public ResponseEntity<String> updateDoc
	   (@PathVariable("id") Long id, @RequestBody DocDetail detail) {

		var _detail = docDetailRepository.findOne(id);
		var _upDetail = new DocDetail(detail.id_doc(),detail.s_name(),detail.s_number(),_detail.id(),detail.n_sum());
		
		docDetailRepository.update(_upDetail);
		return new ResponseEntity<>
		   ("Updated successfully", HttpStatus.OK);

	}
}
