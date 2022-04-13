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
import com.example.model.DocDetail;

@Repository
public class DocDetailRepositoryImpl implements DocDetailRepository {
	
	// Шаблон Jdbc для предоставления функций общения с базой 
	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public DocDetailRepositoryImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public DocDetail findOne(Long id) {
		var sqlQuery = QueryDetail.FIND_ONE;

		try {

			return jdbcTemplate.queryForObject(sqlQuery, this::mapRowToDetail, id);

		} catch (EmptyResultDataAccessException ex) {
			throw new DocNotFound("Invalid detail Id");
		} catch (Exception e) {
			throw new InternalServerError("Internal Server Error");
		}
	}

	@Override
	public List<DocDetail> findAll(Long id_doc) {

		var sqlQuery = QueryDetail.FIND_ALL;
		try {

			return jdbcTemplate.query(sqlQuery, this::mapRowToDetail, id_doc);

		} catch (EmptyResultDataAccessException ex) {
			throw new DocNotFound("Invalid document id");
		} catch (Exception e) {
			throw new InternalServerError("Internal Server Error");
		}
	}

	@Override
	public Long save(DocDetail doc) {

		var sqlQuery = QueryDetail.SAVE;

		var keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(connection -> {
			PreparedStatement stmt = connection.prepareStatement(sqlQuery,
					new String[] { "id" });

			stmt.setLong(1, doc.id_doc());
			stmt.setString(2, doc.s_name());
			stmt.setString(3, doc.s_number());
			stmt.setDouble(4, doc.n_sum());

	
			System.out.println(stmt);
			return stmt;

		}, keyHolder);

		return keyHolder.getKey().longValue();
	}

	@Override
	public void update(DocDetail doc) {

		var sqlQuery = QueryDetail.UPDATE;

		jdbcTemplate.update(sqlQuery,
				doc.id_doc(),
				doc.s_name(),
				doc.s_number(),
				doc.n_sum(),
				doc.id());
	}

	@Override
	public Boolean delete(Long id) {

		var sqlQuery = QueryDetail.DELETE;

		return jdbcTemplate.update(sqlQuery, id) > 0;
	}

	// Заполнение объекта путем сопоставления результатов запроса
	private DocDetail mapRowToDetail(ResultSet resultSet, int rowNum)
			throws SQLException {
		var doc = new DocDetail(
				resultSet.getLong("id_doc"),
				resultSet.getString("s_name"),
				resultSet.getString("s_number"),
				resultSet.getLong("id"),
				resultSet.getDouble("n_sum"));

		return doc;
	}

}