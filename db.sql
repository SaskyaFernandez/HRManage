DROP TABLE IF EXISTS holiday;
DROP TABLE IF EXISTS UserRoles;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	id int GENERATED ALWAYS AS IDENTITY,
		PRIMARY KEY(id),
	firstName varchar(255) NOT NULL,
	lastname varchar(255)NOT NULL,
	email varchar(255)NOT NULL,
	password varchar(255)NOT NULL,
	entryDate date NOT NULL,
	isDeleted bool NOT NULL,
	maxHolidays int NOT NULL,
	holidaysLeft int NOT NULL,
	image varchar(255)
);

CREATE TABLE Roles (
	id int GENERATED ALWAYS AS IDENTITY,
		PRIMARY KEY(id),
	name varchar(255)
);

CREATE TABLE UserRoles (
	userId int NOT NULL,
	CONSTRAINT fk_user
		FOREIGN KEY (userId)
			REFERENCES Users(id),
	roleId int NOT NULL,
	CONSTRAINT fk_role
		FOREIGN KEY (roleId)
			REFERENCES Roles(id),
	startDate date NOT NULL,
	endDate date
);

INSERT INTO Users VALUES 
( default ,'John', 'Doe', 'john.doe@example.com', 'hashed_password', '2023-01-15', false, 25, 2, 'path/to/image1.jpg'),
( default ,'Alice', 'Smith', 'alice.smith@example.com', 'hashed_password', '2022-09-30', false, 30, 12, 'path/to/image2.jpg'),
( default ,'Michael', 'Johnson', 'michael.johnson@example.com', 'hashed_password', '2023-07-12', false, 20, 10, 'path/to/image3.jpg'),
( default ,'Emma', 'Brown', 'emma.brown@example.com', 'hashed_password', '2023-02-28', false, 25, 11, 'path/to/image4.jpg'),
( default ,'David', 'Martinez', 'david.martinez@example.com', 'hashed_password', '2022-11-05', false, 25, 16, 'path/to/image5.jpg'),
( default ,'Olivia', 'Garcia', 'olivia.garcia@example.com', 'hashed_password', '2023-05-20', false, 30, 8, 'path/to/image6.jpg'),
( default ,'James', 'Rodriguez', 'james.rodriguez@example.com', 'hashed_password', '2023-03-17', false, 25, 7, 'path/to/image7.jpg'),
( default ,'Sophia', 'Lopez', 'sophia.lopez@example.com', 'hashed_password', '2023-08-10', false, 20, 15, 'path/to/image8.jpg'),
( default ,'Alexander', 'Hernandez', 'alexander.hernandez@example.com', 'hashed_password', '2023-04-25', false, 25, 5, 'path/to/image9.jpg'),
( default ,'Mia', 'Martinez', 'mia.martinez@example.com', 'hashed_password', '2023-01-30', false, 30, 30, 'path/to/image10.jpg'),
( default ,'Ethan', 'Gonzalez', 'ethan.gonzalez@example.com', 'hashed_password', '2023-06-15', false, 20, 12, 'path/to/image11.jpg'),
( default ,'Charlotte', 'Perez', 'charlotte.perez@example.com', 'hashed_password', '2022-12-20', false, 25, 13, 'path/to/image12.jpg'),
( default ,'William', 'Torres', 'william.torres@example.com', 'hashed_password', '2023-09-05', false, 25, 4, 'path/to/image13.jpg'),
( default ,'Ava', 'Flores', 'ava.flores@example.com', 'hashed_password', '2023-02-10', false, 30, 0, 'path/to/image14.jpg'),
( default ,'Liam', 'Gomez', 'liam.gomez@example.com', 'hashed_password', '2023-07-25', false, 25, 18, 'path/to/image15.jpg'),
( default ,'saskya', 'Fernandez', 'fernandez@hrmange.com', '$2a$10$7oT/1TC67rDhsFj8hSSuGeXUVSRltwvBEppHEOOi1DvsqVZ/VX9IW', '2022-09-30', false, 30, 30, 'path/to/image15.jpg');

INSERT INTO Roles VALUES
( default ,'RH'),
( default ,'manager'),
( default ,'supervisor'),
( default ,'assistant'),
( default ,'analyst'),
( default ,'developer'),
( default ,'designer'),
( default ,'engineer'),
( default ,'consultant'),
( default ,'team_lead'),
( default ,'trainer'),
( default ,'coordinator'),
( default ,'technician');

INSERT INTO UserRoles VALUES 
(1, 1, '2023-01-15', NULL),
(2, 2, '2022-09-30', NULL),
(3, 5, '2023-07-12', NULL),
(4, 6, '2023-02-28', NULL),
(5, 3, '2022-11-05', NULL),
(6, 2, '2023-05-20', NULL),
(7, 4, '2023-03-17', NULL),
(8, 8, '2023-01-30', NULL),
(9, 13, '2023-06-15', NULL),
(10, 12, '2022-12-20', NULL),
(11, 11, '2023-06-15', NULL),
(12, 5, '2022-12-20', NULL),
(13, 9, '2023-09-05', NULL),
(14, 7, '2023-02-10', NULL),
(15, 2, '2023-07-25', NULL),
(16, 1, '2023-07-25', NULL),
(16, 7, '2023-07-25', NULL);

CREATE TABLE holiday (
	id int GENERATED ALWAYS AS IDENTITY,
		PRIMARY KEY(id),
	CONSTRAINT fk_user
		FOREIGN KEY (userId)
			REFERENCES Users(id),
	userId int NOT NULL,
	CONSTRAINT fk_users
		FOREIGN KEY (userId)
			REFERENCES Users(id),
	startDate date NOT NULL,
	endDate date NOT NULL,
	isaccepted VARCHAR(10) CHECK (isaccepted IN ('Approved', 'Pending', 'Rejected')) DEFAULT 'Pending'
);

INSERT INTO holiday VALUES
(default, 1, '2024-05-01', '2024-05-03','Approved'),
(default, 2, '2024-06-10', '2024-06-20','Rejected'),
(default, 3, '2024-07-15', '2024-07-20','Approved'),
(default, 1, '2024-08-01', '2024-08-05',default),
(default, 8, '2024-09-03', '2024-09-10','Approved'),
(default, 3, '2024-10-20', '2024-10-25','Rejected'),
(default, 1, '2024-11-15', '2024-11-20',default),
(default, 2, '2024-12-24', '2024-12-31',default);

SELECT * FROM holiday;