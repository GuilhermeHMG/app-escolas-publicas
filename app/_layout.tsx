import { Stack } from "expo-router";
import { makeServer } from "../src/mocks/server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default function Layout() {
  return <Stack />;
}
