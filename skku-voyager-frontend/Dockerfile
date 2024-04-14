# 프론트엔드 폴더(skku-voyager-frontend)에 저장
FROM node:latest
WORKDIR /frontend
COPY package.json /frontend/
RUN npm install
COPY . /frontend/
CMD ["npm", "start"]
