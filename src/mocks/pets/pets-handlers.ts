import { rest } from 'msw';
import petsMock from './pets-mock';

const petsHandlers : any[] = [
    rest.get(`/pet/findByStatus`, (req: any, res: any, ctx: any) => {
        const status = req.url.searchParams.get('status');
        const pets = petsMock.filter(pet => pet.status == status);

        return res(
            ctx.status(200),
            ctx.json(pets),
        );
  }),
];

export default petsHandlers;