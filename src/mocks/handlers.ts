import { rest } from 'msw';
import petsHandlers from './pets/pets-handlers';

const handlers : any[] = [
    ...petsHandlers,
];

export default handlers;