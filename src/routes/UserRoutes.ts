import { IReq, IRes } from "./common";
import { checkIfEmailExists as checkIfEmailExistsService } from "@src/services";

// check if the user email exists
async function checkIfEmailExists(
  req: IReq<{ email: unknown }>,
  res: IRes
): Promise<void> {
  const email = req.body?.email;
  if (typeof email !== "string") {
    res.status(400).json({ error: "Email must be a string" });
    return;
  }
  const user = await checkIfEmailExistsService(email);

  if (user === null) {
    res.status(200).json({ exists: false });
  } else {
    res.status(409).json({ exists: true });
  }
}

export default {
  checkIfEmailExists,
} as const;
