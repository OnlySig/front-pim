CREATE TABLE cliente (
	id INT AUTO_INCREMENT,
	placa varchar(50) NOT NULL,
    name varchar(50) NOT NULL,
    status varchar(50) NOT NULL,
    data varchar(50) NOT NULL,
    modelo varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE funcionario (
	id INT AUTO_INCREMENT primary key NOT NULL,
    name varchar(50) NOT NULL
);