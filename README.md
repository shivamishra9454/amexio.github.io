<h1 align="center">
  <br>
  <a href="http://www.amexio.tech/"><img src="https://image.ibb.co/kdy6Ev/logo.png" alt="Amexio" width="200"></a>
  <br>
  Amexio Angular Extensions
  <br>
</h1>

<div align="center">
  Amexio (Angular MetaMagic EXtensions for Inputs and Outputs) is a pure Typescript Compnent Library of Angular. We provide modular import for using our rich set of components,charts, maps , dashboard, forms, data, media, layout etc and can be easily configured and implemented in a project. Check out the Demo App built using Amexio. For the Amexio UI Library refer API documentation.
</div>
<br/>

<div align="center">
  <!-- NPM version -->
  <a href="https://npmjs.org/package/amexio-ng-extensions">
    <img src="https://badge.fury.io/js/amexio-ng-extensions.svg"
      alt="NPM version" />
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/amexio-ng-extensions">
    <img src="https://img.shields.io/npm/dm/choo.svg?style=flat-square"
      alt="Downloads" />
  </a>

   <a href="https://npmjs.org/package/amexio-ng-extensions">
    <img src="https://img.shields.io/npm/dt/amexio-ng-extensions.svg"
      alt="Downloads" />
  </a>
  <!--
  <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
<script type="IN/FollowCompany" data-id="13316060" data-counter="top"></script>
-->
</div>

<div align="center">
  <h3>
    <a href="http://www.amexio.tech/">
      Website
    </a>
    <span> | </span>
    <a href="http://www.amexio.org">
      API Docs
    </a>
    <span> | </span>
    <a href="http://www.amexio.org/demoapp/">
      Demo App
    </a>
    <span> | </span>
    <a href="http://forum.metamagicglobal.com/">
      Forum
    </a>
    <span> | </span>
    <a href="https://www.metamagicglobal.com/">
      MetaMagic Global
    </a>
  </h3>
</div>

<br/>

<div align="center">

[![NPM](https://nodei.co/npm/amexio-ng-extensions.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/amexio-ng-extensions/)
</div>
<br/>

## Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 5 versions| last 5 versions| last 3 versions| last 4 versions| last 3 versions| last 3 versions

## Table of Content
- [Features](#features)
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Installation](#amexio-angular-extension---installation)
- [Amexio Modules](#amexio-modules)
- [Amexio Themes](#amexio-themes-material--bootstrap)
- [License](#license)

## Features
- __Pure TypeScript:__ Amexio is a pure Typescript library with 0 Dependencies & Angular 5 Support.
- __Server Rending Support:__ Components support & optimized for server side rendering.
- __Highly Customizable Styling:__ Lot of customization can be done easily using the Amexio SCSS files.
- __80+ High Grade Components:__ We make sure you're nothing short of while building your app
- __Modular Support:__ Load Only what you want, amexio is Modular.


## Angular CLI - Installation

### Overview

The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications

### Getting Started

To install the Angular CLI:

```bash
npm install -g @angular/cli
```
Generating and serving an Angular project via a development server Create and run a new project:

```bash
ng new my-project
cd my-project
ng serve
```

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

For More on Angular CLI [commands](https://github.com/angular/angular-cli/wiki) click on the link.

## Amexio Angular Extension - Installation

To install this library, follow the steps given below:

```bash
$ cd your-angular-project
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';

// Import your library
import { AmexioWidgetModule,CommonDataService } from 'amexio-ng-extensions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# Amexio Modules
<table> 
<tr>
<th>Amexio Modules</th>
</tr>

<tr>
<td>AmexioWidgetModule</td>
</tr>

<tr>
<td>AmexioFormsModule</td>
</tr>

<tr>
<td>AmexioDataModule</td>
</tr>

<tr>
<td>AmexioLayoutModule</td>
</tr>

<tr>
<td>AmexioPaneModule</td>
</tr>

<tr>
<td>AmexioNavModule</td>
</tr>

<tr>
<td>AmexioMediaModule</td>
</tr>

<tr>
<td>AmexioMapsModule</td>
</tr>

<tr>
<td>AmexioChartsModule</td>
</tr>

<tr>
<td>AmexioDashBoardModule</td>
</tr>

<tr>
<td>AmexioEnterpriseEEModule</td>
</tr>

</table>

# Amexio Themes (Amexio / Amexio Material)

<table> 
<tr>
<th>Amexio Material Themes</th>
<th>Amexio Themes</th>
</tr>
<tr>
 <td>Amber</td>AT-MD-Gold-Amber
 <td>Cyan</td>AT-AM-Ocean-Blue
</tr>
<tr>
 <td>Army-Olive</td>AT-MD-Army-Olive
 <td>Deep Orange</td>AT-AM-Tiger
</tr>
<tr>
<td>Ash Stone Black</td>AT-MD-Ash Stone Black
<td>Lime Green</td> ??
</tr>
<tr>
 <td>Black</td>AT-MD-Black
 <td>Matrix</td>AT-AM-Matrix
</tr>
<tr>
 <td>Blue</td>AT-MD-Blue
 <td>Orange</td>AT-AM-Spicy-Apricot
</tr>
<tr>
	<td>Blue Grey</td>AT-MD-Blue-Grey
	<td>Polygon</td>AT-AM-Byzantine-Crystal
</tr>
<tr>
	<td>Brown</td>AT-MD-Ginger-Bread
	<td>Pyramid</td>AT-AM-Honey-Prussian
</tr>
<tr>
	<td>Cerise Magneta</td>AT-MD-Cerise Magneta
	<td>Red</td>AT-AM-Persian-Laguna
</tr>
<tr>
	<td>Charcoal Russet</td>AT-MD-Charcoal Russet
	<td></td>
</tr>
<tr>
	<td>Fern Lime</td>AT-MD-
	<td></td>
</tr>
<tr>
 <td>Frenchrose-mulberry</td>AT-MD-
 <td></td>
</tr>
<tr>
 <td>Grape Voliet</td>AT-MD-
 <td></td>
</tr>

<tr>
 <td>Hot Pink Fuchsia</td>AT-MD-
 <td></td>
</tr>

<tr>
 <td>Indigo</td>AT-MD-Saphire
 <td></td>
</tr>

<tr>
 <td>Jungle Mint</td>AT-MD-
 <td></td>
</tr>

<tr>
 <td>Light Blue</td>AT-MD-Maya
 <td></td>
</tr>

<tr>
 <td>Mahogany Barny Red</td>AT-MD-Mahogany Barny Red
 <td></td>
</tr>

<tr>
 <td>Navy Egyptian</td>AT-MD-Navy Egyptian
 <td></td>
</tr>

<tr>
 <td>Raspberry Sangria</td>AT-MD-Raspberry Sangria
 <td></td>
</tr>


<tr>
 <td>Red Maroon</td>AT-MD-Red Maroon
 <td></td>
</tr>

<tr>
 <td>Sacremento Jado</td>AT-MD-Sacremento Jado
 <td></td>
</tr>

<tr>
 <td>Yale Azure</td>AT-MD-Yale Azure
 <td></td>
</tr>


</table>

More on Amexio themes here : [Amexio themes](https://github.com/meta-magic/amexio.github.io/tree/v4.0/src/modules/styles)

## License

[Apache 2.0](http://www.amexio.org/metamagic-showcase/license.html) © [MetaMagic Global Inc](http://www.metamagicglobal.com/), 2017. [Amexio Angular Extensions](http://www.amexio.tech)

**Enjoy!**
