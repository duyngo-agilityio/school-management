# School Management Admin Dashboard

### Overview
This document provides planning for requirements, technical stack, and estimation details for NextJs practice. You can refer to the details design here: [School Management Admin Dashboard](https://www.figma.com/design/vROuABqVtKpHFXLYNEJ60n/School-Management-Admin-Dashboard-UI-(Community)?node-id=151-31183&t=aataHFgbIeWeBaX5-0)

### Targets
- Apply NextJS key features:
    - Cache
    - Streaming data
    - Dynamic router
    - Layout
    - Optimize image, font

### Team size
- 1 dev (Duy Ngo)

### Timeline
- Estimate time: **5/8/2024 - 14/8/2024**
- Working days: **8 days**

### Editor
- VSCode

### Technical Stack
- [TypeScript](https://www.typescriptlang.org/):
    - By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code
- [Next.js](https://nextjs.org/):
    - Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
- [React](https://react.dev/reference/react):
    - ReactJS is a JavaScript library for building user interfaces.
- [Chakra UI](https://tailwindcss.com/): 
    - ChakraUI is a simple, modular, and accessible component library that gives you the building blocks you need to build your React applications.
- [JSON server](https://github.com/typicode/json-server): 
    - JSON is an acronym for JavaScript Object Notation. JSON Server is a lightweight and easy-to-use Node.js tool that simulates a RESTful API using a JSON file as the data source.
- [React hook form](https://www.react-hook-form.com/):
    - Simple form validation with React Hook Form.
- [Storybook](https://storybook.js.org/):
    - Storybook is purpose-built to help you develop complex UIs faster with greater durability and lower maintenance
- [Jest](https://jestjs.io/):
    - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Testing Library](https://testing-library.com/):
    React Testing Library builds on top of the DOM Testing Library by adding APIs for working with React components

### Requirements
- CRUD teachers, student
- Search teacher, student
- View detail teacher, student

## How to run

### Get source code

| Command                                                                                              | Action                    |
| :----------------------------------------------------------------------------------------------------| :------------------------ |
| `git clone git@gitlab.asoft-python.com:duy.ngo/nextjs-training.git`                                  | Clone Repository with SSH |
| `$ cd nextjs-training`                                                                               | Redirect to folder        |

### Build and Run app

| Command            | Action                                        | Port                  |
| :----------------- | :---------------------------------------------|:--------------------- |
| `$ pnpm install`   | Install packages dependencies                 | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode      | N/A                   |
| `$ pnpm start`     | Starts the application in production mode.    | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode               | http://localhost:3000 |
| `$ pnpm storybook` | Run Storybook.                                | http://localhost:6006 |
| `$ pnpm test`      | Run Unit Test                                 | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                        | N/A                   |
