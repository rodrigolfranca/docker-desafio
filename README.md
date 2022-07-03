# docker-desafio

docker run -it --name "backend-container" --network "desafio-docker" -v "volume-desafio" -p 4000:4000 --entrypoint bash backend-desafio
docker run -it --name "frontend-container" --network "desafio-docker" -v "volume-desafio" -p 3000:3000 --entrypoint bash frontend-desafio
