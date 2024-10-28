import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { ensure } from "../middleware/ensure.middleware";
import {
  carCreateBodySchema,
  carUpdateBodySchema,
} from "../schemas/car.schemas";
import { IsCarIdValid } from "../middleware/isCarIdValid.middleware";

export const carRouter = Router();

carRouter.post(
  "/",
  ensure.bodyIsValid(carCreateBodySchema),
  CarControllers.create
);

carRouter.get("/", CarControllers.getMany);

carRouter.get("/:id", IsCarIdValid.execute, CarControllers.getOne);

carRouter.patch(
  "/:id",
  IsCarIdValid.execute,
  ensure.bodyIsValid(carUpdateBodySchema),
  CarControllers.update
);

carRouter.delete("/:id", IsCarIdValid.execute, CarControllers.delete);
