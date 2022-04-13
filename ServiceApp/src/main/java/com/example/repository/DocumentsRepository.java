package com.example.repository;

import java.util.List;

import com.example.model.Documents;

public interface DocumentsRepository {

	public Documents findOne(Long id);

	public List<Documents> findAll();

	public Long save(Documents doc);

	public void update(Documents doc);

	public Boolean delete(Long id);

}