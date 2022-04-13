package com.example.exception;
public class DocNotFound extends RuntimeException {
	
    private static final long serialVersionUID = 1L;

    public DocNotFound(String msg) {
        super(msg);
    }
}
