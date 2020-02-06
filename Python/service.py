import repository
from TrainingDto import TrainingDto
from datetime import datetime
import logging
from coin_enum import CoinEnum
from CoinValueChartDto import CoinValueChartDto

logger = logging.getLogger(__name__)


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


def coin_value_chart(coins, limit):
    dto_list = []
    for coin in coins:
        if coin == CoinEnum.BITCOIN.value['coin_type']:
            dto_list.append(create_line_data(coin, limit, "Bitcoin"))
        elif coin == CoinEnum.BITCOIN_CASH.value['coin_type']:
            dto_list.append(create_line_data(coin, limit, "Bitcoin Cash"))
        elif coin == CoinEnum.ETHEREUM.value['coin_type']:
            dto_list.append(create_line_data(coin, limit, "Ethereum"))
        elif coin == CoinEnum.BINANCE.value['coin_type']:
            dto_list.append(create_line_data(coin, limit, "Binance"))
        else:
            logger.info("Coin Type not found")
    return dto_list


def create_line_data(coin, limit, coin_name):
    price = []
    label = []
    for entry in repository.coin_value_chart(coin, limit):
        price.append(entry['price'])
        label.append(entry['date'].strftime("%m/%d/%Y, %H:%M:%S"))
    price.reverse()
    label.reverse()
    return CoinValueChartDto(coin_name, price, label)


