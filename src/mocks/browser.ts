// src/mocks/browser.js
import { setupWorker } from "msw";

import { commonHandlers, securityHandler, safeTreeHandler } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...commonHandlers, ...securityHandler, ...safeTreeHandler);
