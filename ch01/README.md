### Links

- [Node version management](https://github.com/tj/n)
- [Vue Quick Start](https://vuejs.org/guide/quick-start.html)

### Base Installations

```shell
sudo pacman -R yarn nodejs nvm
sudo npm install -g n
sudo mkdir -p /usr/local/n /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
sudo chown -R $(whoami) /usr/local/n /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
n latest
node -v
corepack enable
yarn set version stable
yarn -v
```
### New Vue Project

- Name of Project: welcome
- Don't install: ESLint, Prettier

```shell
yarn dlx create-vue@latest
cd welcome
yarn
yarn dev
rm -rf .vscode
```
