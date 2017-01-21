GAME = "games"

install:
	npm install
start:
	npm run babel-node -- src/bin/brain-$(GAME).js
publish:
	npm publish
lint:
	npm run eslint