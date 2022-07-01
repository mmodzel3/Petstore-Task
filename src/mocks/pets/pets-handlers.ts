import { rest } from 'msw';
import Pet from 'src/app/pets/pet';
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
  rest.post(`/pet`, (req: any, res: any, ctx: any) => {
    const pet: Pet = req.body;
    
    petsMock.push(pet);

    return res(
        ctx.status(200),
        ctx.json({}),
    );
  }),
];

export default petsHandlers;