# Custom version of frontend - Original project Jitsi Meet https://github.com/jitsi/jitsi-meet

Install istructions

1) Clone this repository
```
git clone https://github.com/giovannitorsello/custom-jitsi-meet-web.git
```
2) Change directory
```
cd custom-jitsi-meet-web
```

3) First of all, download and install lib-jitsi-meet
```
git clone https://github.com/jitsi/lib-jitsi-meet.git
cd lib-jitsi-meet
```

4) Install lib-jitsi-meet and create the link at lib-jitsi-meet used from nodejs in following install procedue
Please refer to  https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-web
```
npm install
npm link
```
Last istruction may require root permission (sudo) if you want a global link to library.

5) Go in the main project folder (one level up)
```
cd ..
```

6) Activate new lib-jitsi-meet link
```
npm link lib-jitsi-meet
```

7) Finally launch 
```
npm install
npm run postinstall
```
to install all requirements from your custom content.

8) Build all bundle in develop and production release
First set your server by anvironmental variable
export WEBPACK_DEV_SERVER_PROXY_TARGET=https://my.proxyjitsi.com


For development
```
make dev 
```

For production
```
make
```

NOTE
The file `config.js` and the file `interface-config.js` are loaded form server specified by `$WEBPACK_DEV_SERVER_PROXY_TARGET`
via nginx proxing.



