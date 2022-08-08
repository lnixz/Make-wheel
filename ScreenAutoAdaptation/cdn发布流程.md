## 1.打包：npm run cdn_build
## 2.获取文件hash值：node getHashList.js
## 3.拷贝到对应文件夹：如erms scp -r ./dist/erms/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
##                  如metadata scp -r ./dist/metadata/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
##                  如admin scp -r ./dist/admin/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
##                 如platform scp -r ./dist/platform/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
##                 sgportal scp -r ./dist/sgportal/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b

##           ssologin scp -r ./dist/ssologin/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
scp -r ./dist/data/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b
scp -r ./dist/dataarchives/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b

scp -r ./dist/teamwork/ root@192.168.10.27:/nfs-data/web-server-www-data-pvc-4eba5991-362b-4b21-b6dd-34a5557bd06b


        …………