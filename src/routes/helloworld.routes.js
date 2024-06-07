import { Router } from 'express';

import { getHelloWorld, getHelloWorldById } from '../controllers/helloworld.controller.js';
import fakeAuthMiddleware from '../middlewares/fake.middleware.js';

const router = Router();

router.get('/', getHelloWorld);
router.get('/:id', fakeAuthMiddleware, getHelloWorldById);

export default router;