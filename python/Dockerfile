FROM python:3-slim
WORKDIR /pagina1/python
RUN pip3 install flask
RUN pip3 install flask_cors
COPY . .
CMD ["python3","./api.py"]