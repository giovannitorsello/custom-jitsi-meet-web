#!/bin/bash

# Verificare che il contenuto di questa cartella di sviluppo sia identico a quello in esecuzione
# sul server al dominio meetcustom.tiledesk.com.
# In particolare assumono importanza i file config.js e interface_config.js che sono caricati a runtime
# dalla url http//meetcustom.tiledesk.com

scp -ri ../cert/jitsi-tiledesk.pem  ../jitsi-meet      ubuntu@meet.tiledesk.com:/home/ubuntu/

#scp -ri ../cert/jitsi-tiledesk.pem ./libs/    ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/libs/
#scp -ri ../cert/jitsi-tiledesk.pem ./css/      ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/css/
#scp -ri ../cert/jitsi-tiledesk.pem ./images/   ubuntu@meet.tiledesk.com:/home/ubuntu/jitsi-meet/images/