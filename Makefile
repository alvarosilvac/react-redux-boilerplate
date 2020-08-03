run.server:
	npm start

run.react:
	cd react-ui && npm start

install:
	npm install && cd react-ui && npm install

build:
	npm install && cd react-ui && npm install

clean:
	rm -rf node_modules && cd react-ui && rm -rf build && rm -rf node_modules