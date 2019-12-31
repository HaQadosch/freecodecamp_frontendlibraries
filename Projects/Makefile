
# The makefile is a elegant tool for a more civilised age.

# https://news.ycombinator.com/item?id=11195539
# make build | make2tap | tap-format-spec`
# http://i.imgur.com/chs0Jf3.png

folder = MarkdownPreviewer
project = markdown
git-project = https://github.com/HaQadosch/freecodecamp_frontendlibraries.git

all: cra git-push

cra:
	npx create-react-app $(folder)/$(project) --template typescript

clean: 
	rm -rf $(folder)/$(project)/node_modules/

git-push:
	git add . && git commit -m "first import" && git push origin markdown

