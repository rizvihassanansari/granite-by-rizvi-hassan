import { initializeLogger } from "../src/common/logger";
import "../stylesheets/application.scss";

import { setAuthHeaders } from "apis/axios";

initializeLogger();
setAuthHeaders();
