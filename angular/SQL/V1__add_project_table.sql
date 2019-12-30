create table project
(
	id int auto_increment,
	name varchar(255) null,
	created_date datetime null,
	trained boolean null,
	constraint project_pk
		unique (id)
);
