import repository
import TrainingDto
from datetime import datetime


def hello():
    return "Hello World!"


def get_projects():
    projects = repository.get_all_projects()
    return projects


def create_project(res):
    now = datetime.now()
    training_dto = TrainingDto(res["id"], res["name"], now, res["trained"])
    project = repository.create_project(training_dto)
    return project


def delete_project(id_):
    repository.delete_project(id_)
    return id_
