package com.example.repository;

public class QueryDetail {

	public static final String FIND_ONE = 
			"select doc_detail.id_doc"
			+ ",doc_detail.s_name"
			+ ",doc_detail.s_number"
			+ ",doc_detail.id"
			+ ",doc_detail.n_sum"
			+ " from document.documents_detail doc_detail where doc_detail.id = ?";

	public static final String FIND_ALL = 
			"select doc_detail.id_doc"
			+ ",doc_detail.s_name"
			+ ",doc_detail.s_number"			
			+ ",doc_detail.id"
			+ ",doc_detail.n_sum"
			+ " from document.documents_detail doc_detail where doc_detail.id_doc = ? order by doc_detail.id desc";

	public static final String SAVE = 
			"insert into document.documents_detail(id_doc, s_name, s_number, n_sum, id) "
			+ "values (?, ?, ?, ?, nextval('document.seq_doc_detail'))";

	public static final String UPDATE = 
			"update document.documents_detail set id_doc = ?, s_name = ?, s_number = ?, n_sum = ?  where id = ?";

	public static final String DELETE = 
			"delete from document.documents_detail where id = ?";
}
