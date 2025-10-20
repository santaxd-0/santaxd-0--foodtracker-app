import pika

def set_connection():
    """
    Setting connection for the RabbitMQ
    """
    connection = pika.BlockingConnection(pika.ConnectionParameters(host="localhost"))
    channel = connection.channel()
    return [connection, channel]

def send_message(queue_name: str, send_property):
    """
    Sending message to the consumer
    """
    properties = set_connection()
    connection, channel = properties
    channel.queue_declare(queue_name)
    channel.basic_publish(
        exchange="",
        routing_key=queue_name,
        body=send_property
    )
    connection.close()
