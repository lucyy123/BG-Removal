import { NextFunction, Request, Response } from "express";
import { Webhook } from "svix";
import { User } from "../models/userModel";
import ErrorHanlder from "../utils/Error";

export const webhooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const webHooks = new Webhook(process.env.CLERK_WH_SECRET as string);

    if (
      !req.headers["svix-id"] ||
      !req.headers["svix-signature"] ||
      !req.headers["svix-timestamp"]
    ) {
      return next(new ErrorHanlder(400, "Invalid svix values"));
    }

    await webHooks.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const newUser = {
          clerKDd: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          LastName: data.last_name,
        };

        await User.create(newUser);

        res.status(201).json({
          message: "User created successfully",
          success: true,
        });

        break;
      }

      case "user.updated": {
        const updatedUser = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          LastName: data.last_name,
        };

        await User.findOneAndUpdate({ clerkId: data.id }, updatedUser);

        res.status(201).json({
          message: "User Updated successfully",
          success: true,
        });
        break;
      }
      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });

        res.status(200).json({
          message: "User Deleted successfully",
          success: true,
        });
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.log("error:", error);
    return next(new ErrorHanlder(404, "Something went wrong"));
  }
};
