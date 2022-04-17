package com.example.repository;

public class QueryDocuments {

	public static final String FIND_ONE = 
			"select doc.id,doc.s_number,doc.d_date"
			+ ",(select coalesce(sum(doc_detail.n_sum),0) from document.documents_detail doc_detail where doc_detail.id_doc=doc.id) as n_sum"
			+ ",doc.s_description"
			+ " from document.documents doc where id = ?";
	
	public static final String FIND_ALL =
			"select doc.id,doc.s_number,doc.d_date"
			+ ",(select coalesce(sum(doc_detail.n_sum),0) from document.documents_detail doc_detail where doc_detail.id_doc=doc.id) as n_sum"
			+ ",doc.s_description"
			+ " from document.documents doc order by doc.id desc";
		
	public static final String SAVE =
			"insert into document.documents(s_number, d_date, s_description,id) "
			+ "values (?, ?, ?,nextval('document.seq_doc'))";
	public static final String UPDATE =
	       "update document.documents set s_number = ?, d_date = ?, s_description = ?  where id = ?";
	public static final String DELETE =
	      "delete from document.documents where id = ?";
}
