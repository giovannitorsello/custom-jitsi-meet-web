# Versione customizzata del frontend di Jitsi Meet progetto originale a https://github.com/jitsi/jitsi-meet

Istruzioni per l'installazione

1) clonare il repository
git clone https://github.com/giovannitorsello/custom-jitsi-meet-web.git

2) cambiare directory
cd custom-jitsi-meet-web

3) Installare lib-jitsi-meet nella cartella di progetto
git clone https://github.com/jitsi/lib-jitsi-meet.git
cd lib-jitsi-meet

4) Creare il link usato da node per l'installazione del frontend
Le istruzioni sono estratte dal documento https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-web
npm install
npm link

5) Posizionarsi nella cartella principale
cd ..

6) Attivare il link alla libreria lib-jitsi-meet appena installata
npm link lib-jitsi-meet

7) Provedere con l'installazione finale
npm install

8) Creare i vari bundle usati dopo aver settato la variabile di ambiente proxy

Per lo sviluppo
export WEBPACK_DEV_SERVER_PROXY_TARGET=https://mio.sito.com
make dev 

Per la produzione
make

NOTA
I file config.js ed interface-config.js sono caricati dal WEBPACK_DEV_SERVER_PROXY_TARGET


