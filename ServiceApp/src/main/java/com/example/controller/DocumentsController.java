package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.exception.InternalServerError;
import com.example.model.Documents;
import com.example.repository.DocumentsRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/documents")
public class DocumentsController {

	@Autowired
	DocumentsRepository documentsRepository;

	//Создание записи 
	@PostMapping
	public ResponseEntity<String> save(@RequestBody Documents doc) {

		try {
			var docId = documentsRepository.save(doc);

			return new ResponseEntity<String>
			 ("Document successfully created , Id =" 
			    + docId, HttpStatus.CREATED);
			
		} catch (Exception e) {
			throw new InternalServerError(e.getMessage());
		}
	}

	//Получение всего списка документов
	@GetMapping
	public ResponseEntity<List<Documents>> getAll() {

		try {
			return new ResponseEntity<List<Documents>>
			  (documentsRepository.findAll(), HttpStatus.OK);
		} catch (Exception e) {
			throw new InternalServerError(e.getMessage());
		}
	}

	//Получение документа по идентификатору
	@GetMapping("/{id}")
	public ResponseEntity<Documents> getById
	    (@PathVariable("id") Long id) {

		return new ResponseEntity<>
		   (documentsRepository.findOne(id), HttpStatus.OK);

	}

	// Удаление записи
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteDoc
	     (@PathVariable("id") Long id) {

			documentsRepository.delete(documentsRepository.findOne(id).id());

		return new ResponseEntity<>
		   ("Document removed successfully", HttpStatus.OK);

	}

	// Обновление записи
	@PutMapping("/{id}")
	public ResponseEntity<String> updateDoc
	   (@PathVariable("id") Long id, @RequestBody Documents doc) {

		var _doc = documentsRepository.findOne(id);
		var _upDoc = new Documents(doc.s_number(),doc.d_date(),doc.n_sum(),doc.s_description(),_doc.id());
		
		documentsRepository.update(_upDoc);
		return new ResponseEntity<>
		   ("Updated successfully", HttpStatus.OK);

	}
}
