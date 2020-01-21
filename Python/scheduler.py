import requests
import schedule
import logging
import time

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


def heartbeat():
    response = requests.get("https://api.binance.com/api/v3/time")
    print(response)


def initialize_thread(name):
    logger.info("Thread %s: is starting", name)
    schedule.every(5).minutes.do(heartbeat)
    while True:
        schedule.run_pending()
        time.sleep(60)
