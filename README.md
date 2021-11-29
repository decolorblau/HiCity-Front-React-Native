# Claudia_Final-Project-202109

## PAGES:

## Splash Screen:

- Renderiza la imagen del logo.

## HomePage:

    - Main Navigator (tab)
    - Maps
    - Type Filter
    - Search
    - MapCard

## DetailPage:

Renderizar los componentes: - MainNavigator (tab) - DetailCard - Button - Footer

## MyListPage:

Renderizar los componentes: - Button - Header: - Title - Edit button - ListCards: - ListCard - Footer

## LoginPage:

- Renderiza el logo.
- Renderiza el componente MainNavigator.
- Renderiza el componente Start, según indicación recibida.
- Renderiza el componente Login, según indicación recibida.
- Renderiza el componente SingUp, según indicación recibida.

## SettingsPage:

- Renderiza button Logout.
- Envia orden de borrar token del localstorage.

## COMPONENTES:

## MainNavigator:

- Renderizar 4 botones:
  - Explorar button
  - Crear button
  - Ajustes button
  - Login - My lista, según si tiene auth o no.

## StartLog:

- Renderiza los elementos de:
  - Button (Registrate)
  - Button (Log In)
  - Title: "EMPIEZA LA AVENTURA"
  - Description text: "Guarda tus destinos favoritos. Comparte la historia de tu ciudad."

## SingUp:

- Titulo: "CREA TU CUENTA"
- Renderizar form:
  - Renderizar input nombre tipo text.
  - Renderizar input email tipo email.
  - Renderizar input contraseña tipo password.
  - Renderizar boton comenzar.
- Comprueba que los valores introducidos sean correctos.
- Envia un nuevo objeto con los valores introducidos al form.

## LogIn:

- Titulo: "LOGIN"
- Renderizar form:
  - Renderizar input email tipo email.
  - Renderizar input contraseña tipo password.
  - Renderizar boton Entrar.
- Comprueba que los valores introducidos sean correctos.
- Envia un nuevo objeto con los valores introducidos al form.

## LandmarkDetail:

- Recibe un objeto landmark.
- Renderizar toda la información del objeto: title, image, category, description, lastUpdate date .
- Renderiza Button (Mapa)
- Renderiza Footer
- Renderiza Boton like.
- Envia y borra el id del landmark cuando se le indique de la carpeta del usuario.

## MapCard:

- Recibe un objeto y lo renderiza.
- Transforma el texto recibido en audio.
- Renderiza boton play audio, barra audio y tiempo.

## Footer:

- Renderiza el logo y el texto recibido.

## Mapa:

- Recibe un objeto mapa y lo rendariza.
- Recibe una lista de landmarks y los ubica en el mapa.
- Renderiza un boton de geolocalizacion.
- Renderiza la geolocalización.

## ListLandmarks:

- Recibe una lista de landmarks.
- Renderiza la lista de landmarks recibidos.

## Landmark:

- Recibe un objeto y renderiza una carta con el objeto.
