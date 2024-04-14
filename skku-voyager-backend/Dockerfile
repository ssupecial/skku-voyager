# 백엔드 폴더(skku-voyager-backend)에 저장
FROM python:3.11
ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . /backend/
RUN python manage.py makemigrations
RUN python manage.py migrate
