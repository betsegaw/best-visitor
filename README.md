# How to run project

1. Clone repository
2. Execute `docker build -t best-visitor-server .`
3. Execute `docker run -it -p 8080:8080 --rm --name running-best-visitor-server best-visitor-server`

# How to debug project

`docker run -it -p 8080:8080 --net="host" --rm --name running-best-visitor-server best-visitor-server`

1. Make sure you have chrome installed. Node inspector only works with chrome
2. Install node inspector using `npm install -g node-inspector`
3. Run `node-debug -p 8081 index.js`
