import { setupWorker, rest } from "msw";

if (typeof global.process === "undefined") {
  const worker = setupWorker();
  worker.start();
  window.msw = { worker, rest };
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
