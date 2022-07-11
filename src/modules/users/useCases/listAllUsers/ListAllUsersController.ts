import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const id = user_id.toString();

      const user = this.listAllUsersUseCase.execute({ user_id: id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: error.messsage });
    }
  }
}

export { ListAllUsersController };
