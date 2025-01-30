.PHONY: serve install gitpage

serve:
	cd ./mockserver && npm run start

install:
	cd ./mockserver && npm install && cd ../nextjs14 && npm install

page-build:
	cd ./nextjs14 && npm run build && cd ../ && cp -rf ./nextjs14/out/* ./docs/

page-clean:
	rm -rf ./docs/* && touch "./docs/.gitkeep"
