run.server:
	npm start

run.react:
	cd ui && npm start

install:
	npm install && cd ui && npm install

build:
	npm install && cd ui && npm install

clean:
	rm -rf node_modules && cd ui && rm -rf build && rm -rf node_modules