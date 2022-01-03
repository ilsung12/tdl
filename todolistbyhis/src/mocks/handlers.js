import { rest } from "msw";

const todos = [
  {
    id: `1`,
    title: `coil 1 `,
  },
  {
    id: `2`,
    title: `coil 2 `,
  },
];

export const handlers = [
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(todos));
  }),
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
];
