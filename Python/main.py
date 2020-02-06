from flask import Flask, request, jsonify, json
import service
import logging
import threading
import scheduler
import utils

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_url_path="")
app.url_map.converters['int_list'] = utils.IntListConverter


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


@app.route('/coinValueChart/<int_list:coins>/<int:limit>', methods=['GET'])
def coin_value_chart(coins, limit):
    logger.info("[GET][coinValueChart][" + str(len(coins)) + "][" + str(limit) + "]")
    return json.dumps(service.coin_value_chart(coins, limit), default=utils.object_dict)


if __name__ == "__main__":
    x = threading.Thread(target=scheduler.initialize_thread, args=(1,), daemon=True)
    x.start()
    logger.info("Main    : starting app")
    app.run()
