deploy:
	npm run dist && npm run libgen

live:
	npm run live & npm run storybook:serve

sbl:
	npm run storybook:serve

i:
	npm i

pages:
	npm run storybook:build && npm run build && mv storybook-static/index.html storybook-static/storybook.html && rsync -a storybook-static/ build/ && rm -r storybook-static
