import requests
import schedule
import logging
import time
import repository
from coin_enum import CoinEnum
from CoinValue import CoinValue
from datetime import datetime

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


def heartbeat():
    now = datetime.now()
    coins = []
    for coin in CoinEnum:
        response = requests.get("https://api.binance.com/api/v3/ticker/price", params=[('symbol', coin.value['symbol'])])
        if response.status_code == 200:
            res_json = response.json()
            coins.append(CoinValue(coin.value['coin_type'], res_json['price'], now))
        else:
            logger.error("Failed to collect data for " + coin)

    repository.save_coin_price(coins)


def initialize_thread(name):
    logger.info("Thread %s: is starting", name)
    schedule.every(5).minutes.do(heartbeat)
    while True:
        schedule.run_pending()
        time.sleep(60)
