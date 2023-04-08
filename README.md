# semanas-javascript-expert

Semana javascript expert 02 -> zoom-clone

    Links
        Layout: https://github.com/ErickWendel/jsexpert02-skeleton-ew
        final: https://github.com/ErickWendel/semana-javascript-expert02
        https://www.w3.org/TR/webrtc/
        https://developer.chrome.com/blog/mediarecorder/
        https://www.tutorialspoint.com/webrtc/webrtc_signaling.htm

    Commands
        Client
            npm ci --silent
            npm start
                http://127.0.0.1:8080/pages/home/
            DEPLOY
                git init
                heroku apps:create
                git add
                git commit -m "something"
                git push heroku master
                    # Get provided URL
                heroku logs
                heroku apps:delete

        Server
            npm init -y
            npm i socket.io@3.0.5
            npm i -D nodemon
            npm ci --silent
            npm start
            DEPLOY
                git init
                heroku apps:create
                git add
                git commit -m "something"
                git push heroku master
                    # Get provided URL
                heroku logs
                heroku apps:delete

        Peer Server
            npm ci --silent
            npm run dev
            DEPLOY
                git init
                heroku apps:create
                git add
                git commit -m "something"
                git push heroku master
                    # Get provided URL
                heroku logs
                heroku apps:delete

        Heroku (DEPLOY)
            npm i -g heroku
            heroku login

    Terms
        Peer to Peer - Comunicação ponta a ponta em que o nó pode ser cliente e servidor
        WebRtc - Comunicação ponto a ponto em tempo real e troca de dados em navegadores
        PeerJS - Abstrair a complexidade do API do Browser
        ICE Framework - Rota mais curta de Comunicação (público ou privado)
        Stun Server - Descobrir o endereço necessário para a conexão
        Turn Relay Server - Garantir o tráfego de mensagens e streams como contingência

Semana javascript expert 03 ->
