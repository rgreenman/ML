import enum


# These are the 4 coins we will track (Bitcoin, Bitcoin Cash, Ethereum, Binance)
# compared to USDT the Tether coin which is approximately $1 USD
class CoinEnum(enum.Enum):
    BITCOIN = dict(name="BITCOIN", symbol='BTCUSDT', coin_type=1)
    BITCOIN_CASH = dict(name="BITCOIN_CASH", symbol='BCHUSDT', coin_type=2)
    ETHEREUM = dict(name="ETHEREUM", symbol='ETHUSDT', coin_type=3)
    BINANCE = dict(name="BINANCE", symbol='BNBUSDT', coin_type=4)
