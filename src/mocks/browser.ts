// src/mocks/browser.js
import { commonHandlers, securityHandler } from "./handlers";

import { setupWorker } from "msw";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...commonHandlers, ...securityHandler);
