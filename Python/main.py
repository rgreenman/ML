from flask import Flask, request, jsonify
import service
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_url_path="")


@app.route('/')
def hello():
    logger.info("Starting Machine Learning App")
    return app.send_static_file('index.html')


@app.route('/projects', methods=['GET'])
def get_projects():
    logger.info("[GET][projects]")
    return jsonify(service.get_projects())


@app.route('/project', methods=['POST'])
def create_project():
    res = request.get_json()
    logger.info("[POST][project][" + res["name"] + "]")
    return jsonify(service.create_project(res))


@app.route('/project/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    logger.info("[DELETE][project][" + str(project_id) + "]")
    return jsonify(service.delete_project(project_id))


if __name__ == "__main__":
    app.run()
