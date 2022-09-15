# virtual-list-task

The source code for the virtual-list-task [view demo](https://virtual-list-task.vercel.app)

## Table of contents

1. [Features](#features)
2. [Dependencies](#dependencies)
3. [Prerequisites](#prerequisites)
4. [Install and Use](#install-and-use)
5. [Folder Structure](#folder-structure)
6. [Learn More](#learn-more)
7. [Deploy on Vercel](#deploy-on-vercel)

## Features

- show a table to list items
- handle a large amount of data +10,000, without using any dependencies using by using a virtual list strategy for rendering

## Dependencies

The project is built with:

- `react.js` mainly

## Prerequisites

To use this project you should have the following on your machine:

1. `Node.js`
2. `yarn`

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/Mohmmed-Mahsoub/virtual-list-task.git`

2. Install packages:
   `yarn`

3. Run the project:
   `yarn start`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The main folder structure of the code is structured like the following:

```js
├── node_modules (.gitignore)
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src
│   ├── components
│   │   ├── tableListItems
│   │   │   └── uleListItems.component.js
│   │   ├── tableRowItem
│   │   │   └── uableRowItem.component.js
│   ├── customHooks
│   │   └── useWindowDimensions.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── serviceWorker.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
└── yarn.lock
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

## Deploy on Vercel

The easiest way to deploy your app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of React.js.
