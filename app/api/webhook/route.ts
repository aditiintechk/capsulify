import {
  createUser,
  deleteUser,
  updateUser,
} from "@/app/lib/actions/user.actions";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (eventType === "user.created") {
      console.log("New user created:", id);
      // Handle user creation
      createUser();
    }
    if (eventType === "user.updated") {
      console.log("User updated:", id);
      // Handle user update
      updateUser();
    }

    if (eventType === "user.deleted") {
      console.log("User deleted:", id);
      // Handle user deletion
      deleteUser();
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
