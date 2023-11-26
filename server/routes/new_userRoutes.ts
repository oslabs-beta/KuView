import {Request, Response, NextFunction} from 'express';
import {Router} from 'express';
import UserController from '../controllers/new_userController';
import DashboardController from '../controllers/new_dashboardController';
import InstallController from '../controllers/installController';

const router = Router();
router.post(
  '/signup',
  UserController.createUser,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post('/login', UserController.getUser, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.user);
});

router.post(
  '/sendgraf',
  InstallController.installFunc,
  InstallController.portFoward,
  DashboardController.createDashboard,
  DashboardController.updateUID,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.updatedUser);
  }
);

export default router;
