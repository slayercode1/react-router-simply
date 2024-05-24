# React Router simplify

Ce package a pour objectif de simplifier l'utilisation du routeur au sein de React. Veuillez noter que ce package est expérimental et ne possède pas toutes les fonctionnalités d'un routeur complet.

## Installation

```bash
  npm insatll @slayercode1/react-router-simplify@0.0.1
```

## Usage

### Définir votre schéma de routes

```tsx
import { Link, RouteProps, Router, useNavigate, useParams } from "react-router-simplify";

const routes: RouteProps[] = [
  { path: '/', element: <Home /> },
 { path: '/:id', element: <HomeParams /> },
  { path: '/about', element: <About /> },
  { path: '/contacts', element: <Contacts /> },
];

const App = () => {
  return (
    <Router routes={routes} />
  );
};

export default App;

```

### Ajouter une page d'erreur personnalisée pour les URL non correspondantes si vous le souhaitez

```tsx
import { Router } from "react-router-simplify";

const App = () => {
  return (
    <Router routes={routes} errorElement={<div>Error 404: Page Not Found</div>} />
  );
};

export default App;

```

### Navigation avec des liens

Les liens de navigation sont simples à créer, et une classe active est appliquée par défaut.

```tsx
  import { Link } from "react-router-simplify";

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to={`/${10}`} >Home with params</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </>
  );
};

export default Navigation;

```

### Récupérer les paramètres de l'URL

Utilisez le hook useParams pour accéder aux paramètres de l'URL.

```ts
import { useParams } from "react-router-simplify";

const MyComponent = () => {
  const params = useParams();
  
  return (
    <div>
      Param: {params}
    </div>
  );
};

export default MyComponent;

```

### Navigation programmatique avec le hook useNavigate

Utilisez le hook useNavigate pour naviguer programmatique dans votre application.

```tsx
import { useNavigate } from "react-router-simplify";

const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/contacts")}>
      Go to Contacts
    </button>
  );
};

export default MyComponent;

```

En suivant cette documentation, vous pouvez rapidement configurer et utiliser le package react-router-simplify pour la gestion des routes dans votre application React.
