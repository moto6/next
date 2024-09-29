.PHONY: serve install

serve:
	cd ./mockserver && npm run start

install:
	cd ./mockserver && npm install && cd ../nextjs14 && npm install
