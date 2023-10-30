import { TextEncoder, TextDecoder } from "util";
import * as dotenv from "dotenv";

dotenv.config();
Object.assign(global, { TextDecoder, TextEncoder });
