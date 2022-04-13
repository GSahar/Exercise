--
-- Create SCHEMA "document"
--
CREATE SCHEMA "document" AUTHORIZATION postgres;
-- Permissions
GRANT ALL ON SCHEMA "document" TO postgres;

--
-- Create table for `documents`
--
CREATE TABLE "document".documents (
	s_number varchar NOT NULL, -- Номер документ
	d_date date NOT NULL, -- Дата документа
	s_description varchar NULL, -- Примечание
	id numeric NOT NULL, -- Идентификатор документа
	CONSTRAINT documents_pk PRIMARY KEY (id),
	CONSTRAINT documents_un UNIQUE (s_number)
);

-- Permissions

ALTER TABLE "document".documents OWNER TO postgres;
GRANT ALL ON TABLE "document".documents TO postgres;

--
-- Create table for `documents_detail`
--

CREATE TABLE "document".documents_detail (
	id_doc int4 NOT NULL, -- Идентификатор документа
	s_name varchar NOT NULL, -- Наименование документа
	s_number varchar NOT NULL, -- Номер документа
	id numeric NOT NULL, -- Идентификатор строки документа
	n_sum numeric NULL DEFAULT 0.00, -- Сумма позиции документа
	CONSTRAINT documents_detail_pk PRIMARY KEY (id),
	CONSTRAINT documents_detail_un UNIQUE (id_doc, s_number)
);
CREATE INDEX documents_detail_id_doc_idx ON document.documents_detail USING btree (id_doc);

-- Permissions

ALTER TABLE "document".documents_detail OWNER TO postgres;
GRANT ALL ON TABLE "document".documents_detail TO postgres;


-- "document".documents_detail foreign keys

ALTER TABLE "document".documents_detail ADD CONSTRAINT documents_detail_fk FOREIGN KEY (id_doc) REFERENCES "document".documents(id) ON DELETE CASCADE;