class Router {

  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegments) {
    // Получение шаблона для данного маршрута.
    const matchedRoute = this._matchUrlToRoute(urlSegments);

    const url = `/${urlSegments.join('/')}`;
    history.pushState({}, '', url);

    const routerOutletElement = document.querySelectorAll('[data-router-outlet]')[0];
  
    var client = new XMLHttpRequest();
    client.open('GET', matchedRoute.getTemplate(matchedRoute.params));
    client.onreadystatechange = function () {
      if (client.readyState === XMLHttpRequest.DONE)
        setInnerHTML(routerOutletElement, client.responseText);
    }
    client.send();
  }

  _matchUrlToRoute(urlSegments) {
    // Пробуем сопоставить URL-адрес с маршрутом.
    const routeParams = {};
    const matchedRoute = this.routes.find(route => {

      // Предполагаем, что путь маршрута всегда начинается с косой черты, и поэтому 
      // первый элемент массива сегментов всегда будет пустой строкой.
      // Режем массив по индексу 1, чтобы игнорировать эту пустую строку.
      const routePathSegments = route.path.split('/').slice(1);

      // Если сегментов разное количество, значит маршрут не соответствует URL.
      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }

      // Если каждый сегмент URL-адреса соответствует соответствующему сегменту пути маршрута
      // или сегмент пути маршрута начинается с «:», тогда маршрут соответствует.
      const match = routePathSegments.every((routePathSegment, i) => {
        return routePathSegment === urlSegments[i] || routePathSegment[0] === ':';
      });

      // Если маршрут соответствует URL-адресу, извлекаем все параметры из URL-адреса.
      if (match) {
        routePathSegments.forEach((segment, i) => {
          if (segment[0] === ':') {
            const propName = segment.slice(1);
            routeParams[propName] = decodeURIComponent(urlSegments[i]);
          }
        });
      }
      return match;
    });

    return { ...matchedRoute, params: routeParams };
  }

  _loadInitialRoute() {
    // Определяем сегменты пути для маршрута, который должен загружаться изначально.
    const pathnameSplit = window.location.pathname.split('/');
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';
    // Загрузите начальный маршрут.
    this.loadRoute(...pathSegments);
  }
}

function setInnerHTML(elm, html) {
  elm.innerHTML = html;

  Array.from(elm.querySelectorAll("script")).forEach(oldScript => {

    const newScript = document.createElement("script");

    Array.from(oldScript.attributes)
      .forEach(attr => newScript.setAttribute(attr.name, attr.value));
      
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
