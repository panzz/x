#!/bin/bash
pwd
rm -f nginx.tar
# cp -r conf.d out
# cp nginx.conf out 
cd out
# cp conf.d/default.conf.dev conf.d/default.conf
pwd
tar -cvf nginx.tar *
cd ..
mv out/nginx.tar .

