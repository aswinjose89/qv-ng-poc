<p align="center">
  <a href="https://github.com/ng-matero">
    <img width="150" src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/244879/459522_878566.png">
  </a>
</p>

<h1 align="center">
AI POC
</h1>

## ✨ Features

- Material Extensions
- Schematics support
- Modern design style
- Multiple admin layout
- Powerful color system
- Rich CSS helpers
- Dark mode support
- RTL support
- Internationalization
- Authentication
- HTTP interceptors

## 📦 Compatibility

Which version to use?

| Angular | Material | Ng-Matero | Extensions |
| ------- | -------- | --------- | ---------- |
| v11     | v11      | 11.x.x    | 11.x.x     |
| v10     | v10      | 10.3.5    | 10.14.0    |
| v9      | v9       | 9.7.2     | 9.11.13    |
| v8      | v8       | 0.16.0    | 0.9.3      |

## 🔧 Installation

The project has support `ng add` yet.

```bash
$ ng new <project-name>
$ cd <project-name>
$ ng add ng-matero
```

You can also git clone the starter repo to start. But it's not recommended.

```bash
$ git clone --depth=1 git@github.com:ng-matero/starter.git <project-name>
$ cd <project-name>
$ npm install
```

## ⚙️ Schematics

You can use the ng-matero schematics to generate a module or a page.

### Module schematic

Generate a lazy loaded module.

```bash
$ ng g ng-matero:module <module-name>
```

The new module will be created in `routes` folder, it will be added in `routes.module` and its route declaration will be added in `routes-routing.module` automaticly.

### Page schematic

Generate a page component in the module.

```bash
$ ng g ng-matero:page <page-name> -m=<module-name>
```

Generate a entry component in the page component.

```bash
$ ng g ng-matero:page <page-name>/<entry-component-name> -m=<module-name> -e=true
```

### Example

Just two steps after initializing the project, you can get a route page.

```bash
$ ng g ng-matero:module abc
$ ng g ng-matero:page def -m=abc
```

Take a look at `http://localhost:4200/#/abc/def`, enjoy it!

## 💻 Development

```bash
$ git clone git@github.com:ng-matero/ng-matero.git
$ cd ng-matero
$ npm install
$ npm run hmr
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/ng-matero/contribute)]

#### Individuals

<a href="https://opencollective.com/ng-matero"><img src="https://opencollective.com/ng-matero/individuals.svg?width=890"></a>

## 📃 License

MIT
