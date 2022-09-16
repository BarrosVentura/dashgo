import { createServer, Factory, Model } from "miragejs";
import { randBetweenDate, randEmail, randFullName } from "@ngneat/falso";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return randFullName();
        },
        email() {
          return randEmail().toLowerCase();
        },
        createdAt() {
          return randBetweenDate({
            from: new Date("09/05/2022"),
            to: new Date(),
            length: 1,
          }).pop();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
