import { rest } from 'msw';

const handlers : any[] = [
    rest.get('/', (req: any, res: any, ctx: any) => {
        return res(
            ctx.status(200),
            ctx.json({ }),
        );
  }),
];

export default handlers;