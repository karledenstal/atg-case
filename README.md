# ATG Case

Bootstrapped with Vite + React + Typescript.

Code test was a bit more complex than I thought, but it was fun!
I didn't type up the entire response, because it was so massive, so I only typed up what I needed to complete the assignment.

## Technologies

Most technologies are self-explanatory, but I'll list them here.

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [date-fns](https://date-fns.org/)
- [vitest](https://vitest.dev/) + [msw](https://mswjs.io/) + [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Justifications

- Used Vite to bootstrap, because it's faster and more lightweight than CRA (CRA is also deprecated).
- I used TailwindCSS to simplify the styling and use a robust design system. Since it tree-shakes, it won't bloat the bundle size.
- I opted to use RTK Query to query the data. React query would work as well, but I like the syntax of RTK Query better + if redux is going to be used in the future, it's a no-brainer.
- I used date-fns to simplify the date formatting. It's a very robust library that I've used in the past.
- msw is used to intercept and return mock data as well as test error response.
- vitest is used because it works better with vite than jest does. Also works similarly.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Testing

**Note:** Tests are definitely my weakest part. Set it up using `msw` and `vitest`, but I'm too unfamiliar with it to be confident in the tests. I worked in a red-green-refactor cycle, but I'm not sure if I'm testing the right things.

Run tests:

```bash
npm run test
```

