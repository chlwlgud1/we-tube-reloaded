import express from "express"; // express 프레임워크 임포트
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000; // 4000번 포트 설정

const app = express(); // express function을 사용하여 express app을 생성함
const logger = morgan("dev");
app.use(logger);


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT} !!`)

app.listen(PORT, handleListening);
