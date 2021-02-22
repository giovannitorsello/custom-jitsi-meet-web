    #!/bin/bash

# Verificare che il contenuto di questa cartella di sviluppo sia identico a quello in esecuzione
# sul server al dominio meetcustom.tiledesk.com.
# In particolare assumono importanza i file config.js e interface_config.js che sono caricati a runtime
# dalla url http//meetcustom.tiledesk.com

export WEBPACK_DEV_SERVER_PROXY_TARGET=https://meetcustom.tiledesk.com
make dev

