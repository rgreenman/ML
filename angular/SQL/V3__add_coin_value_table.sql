CREATE TABLE coin_value (
  id int auto_increment,
  coin_type int null,
  price int null,
  date datetime null,
  CONSTRAINT coin_value_pk
  PRIMARY KEY (id),
  CONSTRAINT coin_type_fk
  FOREIGN KEY (coin_type)
    REFERENCES coin(id)
);
