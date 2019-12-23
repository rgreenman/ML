import pymysql
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


class Database:
    def __init__(self):
        host = "localhost"
        user = "root"
        password = "devdb"
        db = "ml"
        try:
            self.connection = pymysql.connect(host=host, user=user, password=password, db=db,
                                          cursorclass=pymysql.cursors.DictCursor)
            self.cursor = self.connection.cursor()
            logger.debug("Connection Opened")
        except pymysql.InterfaceError as e:
            logger.debug("Connection Failed", e)

    def fetch_all(self, query, params):
        try:
            self.cursor.execute(query, params)
            records = self.cursor.fetchall()
            logger.debug(str(self.cursor.rowcount) + " Record(s) Fetched successfully")
            return records
        except pymysql.DatabaseError as e:
            logger.debug("Failed to execute fetch_all", e)

    def fetch_one(self, query, params):
        try:
            self.cursor.execute(query, params)
            record = self.cursor.fetchone()
            logger.debug(str(self.cursor.rowcount) + " Record Fetched successfully")
            return record
        except pymysql.DatabaseError as e:
            logger.debug("Failed to execute fetch_one", e)

    def create(self, query, params):
        try:
            self.cursor.execute(query, params)
            self.connection.commit()
            logger.debug(str(self.cursor.rowcount) + " Record Created successfully")
            return self.cursor.lastrowid
        except pymysql.DatabaseError as e:
            logger.debug("Failed to create row", e)

    def delete(self, query, params):
        try:
            self.cursor.execute(query, params)
            self.connection.commit()
            logger.debug(str(self.cursor.rowcount) + " Record Deleted successfully")
        except pymysql.DatabaseError as e:
            logger.debug("Failed to delete row", e)

    def __del__(self):
        logger.debug("Connection closed")
        self.connection.close()


def get_all_projects():
    db = Database()
    projects = db.fetch_all("SELECT * FROM project LIMIT 10", {})
    return projects


def create_project(training_dto):
    db = Database()
    id_ = db.create("INSERT INTO project (name, created_date, trained) ""VALUES (%s, %s, %s)",
                    (training_dto.name, training_dto.created_date, training_dto.trained))
    return db.fetch_one("SELECT * FROM project WHERE id = %s", id_)


def delete_project(id_):
    db = Database()
    db.delete("DELETE from project WHERE id = %s", id_)

