import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    console.log("getStreamToken: user ID =", req.user.id);
    const token = generateStreamToken(req.user.id);
    res.status(200).json({ token }); // Fixed 'son' to 'json'
  } catch (error) {
    console.error("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}