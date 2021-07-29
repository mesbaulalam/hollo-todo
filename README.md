![NextJS](https://img.shields.io/badge/NextJS-11.0.1-fcba03)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2.7-green)
![React](https://img.shields.io/badge/React-17.0.2-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-4.3.5-red)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project has been implemented with TypeScript and styled with TailwindCSS.

## Getting Started

To get started, just clone the repository and run `yarn install && yarn dev`:

```bash
git clone https://github.com/mesbaulalam/hollo-todo.git
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Comments/External libraries used

- Use of Material-UI (^4.12.2) to trigger and design modal for mobile screen.

- React Context API for global state management. For a single-page and simple application like a Todo list, I felt Redux overcomplicates things, and chose to use the Context API. I never worked with Context API, so I also wanted to use it in a project

- TailwindCSS has some limitations when styling form states, hence I used @tailwindcss/custom-forms (^0.2.1)

- Avoided using type "any" since it is highly discouraged in TypeScript

- No unit tests have been performed in this project.
