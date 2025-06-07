import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Steam API key or secret is missing");
  throw new Error("Steam API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    console.log("Upserting Steam user:", userData.id);
    await streamClient.upsertUsers([userData]);
    console.log("Steam user upserted successfully:", userData.id);
    return userData;
  } catch (error) {
    console.error("Error upserting Steam user:", error.message);
    throw error;
  }
};

export const generateStreamToken = (userID) => {
  try {
    console.log("Generating Steam token for userID:", userID);
    if (!userID || typeof userID !== "string") {
      throw new Error("Invalid userID: must be a non-empty string");
    }
    const userIDStr = userID.toString(); // Corrected from tostring
    const token = streamClient.createToken(userIDStr);
    console.log("Steam token generated successfully for userID:", userID);
    return token;
  } catch (error) {
    console.error("Error generating Steam token:", error.message);
    throw error;
  }
};