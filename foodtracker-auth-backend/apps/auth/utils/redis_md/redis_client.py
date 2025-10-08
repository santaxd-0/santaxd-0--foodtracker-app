import redis
from dotenv import load_dotenv
import os

# Connect to redis db
def connect_to_db():
    load_dotenv()
    redis_db = redis.Redis(
        host=os.getenv("REDIS_HOST"),
        port=os.getenv("REDIS_PORT"),
        decode_responses=os.getenv("DECODE_RESPONSES")
    )
    return redis_db

# Store jwt token
def store_jwt(redis_db, redis_key, token_expires_at, refresh_token):
    try:
        redis_db.setex(
            name=redis_key,
            time=int(token_expires_at),
            value=refresh_token
        )
    except Exception as e:
        print("Error" + e)