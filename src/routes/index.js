import { Component } from "react";
import New from "~/pages/New";
import Post from "~/pages/Post";
import Create from "~/pages/Create";

// Public routes
const publicRoutes = [
  { path: "/", Component: New },
  { path: "/post", Component: Post },
  { path: "/create", Component: Create },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
