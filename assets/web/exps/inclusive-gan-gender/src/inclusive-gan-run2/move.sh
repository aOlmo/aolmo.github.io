ls |sort -R |tail -50 |while read file; do
	cp $file "selected/${file}"
done
