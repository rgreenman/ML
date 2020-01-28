CREATE TABLE coin (
  id int NOT NULL,
  name varchar(255) null,
  CONSTRAINT coin_pk
  PRIMARY KEY (id)
);

CREATE INDEX coin_id_index ON coin (id);

INSERT INTO coin
  (id, name)

VALUES
  (1, 'BITCOIN'),
  (2, 'BITCOIN_CASH'),
  (3, 'ETHEREUM'),
  (4, 'BINANCE')
