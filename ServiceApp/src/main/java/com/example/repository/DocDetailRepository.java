package com.example.repository;

import java.util.List;

import com.example.model.DocDetail;

public interface DocDetailRepository {

	public DocDetail findOne(Long id);

	public List<DocDetail> findAll(Long id_doc);

	public Long save(DocDetail doc);

	public void update(DocDetail doc);

	public Boolean delete(Long id);

}