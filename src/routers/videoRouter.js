import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videoController"; // 컨트롤러에서 받아온 것

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see); 
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;