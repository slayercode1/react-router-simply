import { FC, useEffect, useState } from "react";
import NotFound from "../errorElement";

export type RouteProps = {
  path: string,
  element: JSX.Element,
}

type RouterProps = {
  routes: RouteProps[],
  errorElement?: JSX.Element,
}

export const Router: FC<RouterProps> = ({ routes, errorElement = <NotFound />}) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("navigate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", onLocationChange);
    };
  }, []);

  const matchRoute = (path: string, currentPath: string): boolean => {
    const pathSegments = path.split('/').filter(Boolean);
    const currentPathSegments = currentPath.split('/').filter(Boolean);

    if (pathSegments.length !== currentPathSegments.length) {
      return false;
    }

    return pathSegments.every((segment, index) => {
      return segment.startsWith(':') || segment === currentPathSegments[index];
    });
  };

  // Check for exact matches first (for static routes)
  let route = routes.find(r => r.path === currentPath);

  // If no exact match, check for dynamic matches
  if (!route) {
    route = routes.find(r => matchRoute(r.path, currentPath));
  }

  const componentToRender = route ? route.element : errorElement;

  return componentToRender
  
};