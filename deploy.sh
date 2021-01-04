#!/bin/bash

# Verificare che il contenuto di questa cartella di sviluppo sia identico a quello in esecuzione
# sul server al dominio meetcustom.tiledesk.com.
# In particolare assumono importanza i file config.js e interface_config.js che sono caricati a runtime
# dalla url http//meetcustom.tiledesk.com
cert="/home/torsello/SviluppoSoftware/ProgettiDockerCompose/JitsiMeetDocker/jitsi-tiledesk.pem"
scp -ri $cert interface_config.js       ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert logging_config.js		    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert *.json					ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert *.html					ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert *.ico					    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert libs					    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert static                    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert css/all.css 			    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/css/
#scp -ri $cert sounds					ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
#scp -ri $cert fonts					    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert images					ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
#scp -ri $cert lang					    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert connection_optimization	ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert resources/robots.txt	    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert resources/*.sh			ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/scripts/
scp -ri $cert pwa-worker.js			    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/
scp -ri $cert manifest.json			    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/