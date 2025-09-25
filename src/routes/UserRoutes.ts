import { IReq, IRes } from "./common";
import { UserService } from "@src/services/UserService";

// check if the user email exists
async function checkIfEmailExists(req: IReq, res: IRes): Promise<void> {
  const email = req.body?.email;
  if (typeof email !== "string") {
    res.status(400).json({ error: "Email must be a string" });
    return;
  }
  const user = await UserService.checkIfEmailExists(email);

  if (user === null) {
    res.status(200).json({ exists: false });
  } else {
    res.status(409).json({ exists: true });
  }
}

export default {
  checkIfEmailExists,
} as const;
