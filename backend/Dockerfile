FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1
ENV DEBUG=0

# Configure ssh to use AES encryption (optional)
RUN mkdir -p /root/.ssh && \
    echo "Host *" > /root/.ssh/config && \
    echo "    Ciphers aes128-ctr,aes192-ctr,aes256-ctr" >> /root/.ssh/config && \
    chmod 600 /root/.ssh/config

WORKDIR /backend

COPY requirements.txt /backend

RUN apk update \
  && apk add --virtual build-deps gcc python3-dev musl-dev \
  && apk add postgresql-dev \
  && pip install psycopg2 \
  && apk del build-deps

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . /backend


