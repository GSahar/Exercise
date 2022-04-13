package com.example.repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

import com.example.exception.InternalServerError;
import com.example.exception.DocNotFound;
import com.example.model.Documents;

@Repository
public class DocumentsRepositoryImpl implements DocumentsRepository {

	// Шаблон Jdbc для предоставления функций общения с базой
	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public DocumentsRepositoryImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Documents findOne(Long id) {
		var sqlQuery = QueryDocuments.FIND_ONE;

		try {

			return jdbcTemplate.queryForObject(sqlQuery, this::mapRowToDoc, id);

		} catch (EmptyResultDataAccessException ex) {
			throw new DocNotFound("Invalid doc Id");
		} catch (Exception e) {
			throw new InternalServerError("Internal Server Error");
		}

	}

	@Override
	public List<Documents> findAll() {

		var sqlQuery = QueryDocuments.FIND_ALL;

		return jdbcTemplate.query(sqlQuery, this::mapRowToDoc);
	}

	@Override
	public Long save(Documents doc) {

		var sqlQuery = QueryDocuments.SAVE;

		var keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(connection -> {
			PreparedStatement stmt = connection.prepareStatement(sqlQuery,
					new String[] { "id" });

			stmt.setString(1, doc.s_number());
			stmt.setDate(2, doc.d_date());
			stmt.setString(3, doc.s_description());

			return stmt;

		}, keyHolder);

		return keyHolder.getKey().longValue();
	}

	@Override
	public void update(Documents doc) {

		var sqlQuery = QueryDocuments.UPDATE;

		jdbcTemplate.update(sqlQuery,
				doc.s_number(),
				doc.d_date(),
				doc.s_description(),
				doc.id());
	}

	@Override
	public Boolean delete(Long id) {

		var sqlQuery = QueryDocuments.DELETE;

		return jdbcTemplate.update(sqlQuery, id) > 0;
	}

	// Заполнение объекта путем сопоставления результатов запроса
	private Documents mapRowToDoc(ResultSet resultSet, int rowNum)
			throws SQLException {
		var doc = new Documents(
				resultSet.getString("s_number"),
				resultSet.getDate("d_date"),
				resultSet.getLong("n_sum"),
				resultSet.getString("s_description"),
				resultSet.getLong("id"));

		return doc;
	}

}