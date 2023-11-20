function home(){
    const url = new URL(window.location.href);
    const doc = url.searchParams.get('docs');
    const doc1 = url.pathname
    console.log(url)
    switch(doc1) {
        case '/tourism':
            router.loadRoute('');
        break;
        case '/tourism-interactive-simulator':
            router.loadRoute('tourism');
        break;
        case '/tourism-virtual-simulator':
            router.loadRoute('tourism');
        break;
        case '/tourism-video-lesson':
            router.loadRoute('tourism');
        break;

        case '/clothes-belts':
            router.loadRoute('');
        break;
        case '/clothes-belts-dynamic-infographic':
            router.loadRoute('clothes-belts');
        break;
        case '/clothes-belts-interactive-simulator':
            router.loadRoute('clothes-belts');
        break;
        case '/clothes-belts-virtual-simulator':
            router.loadRoute('clothes-belts');
        break;

        case '/clothes-shoulders':
            router.loadRoute('');
        break;
        case '/clothes-shoulders-dynamic-infographic':
            router.loadRoute('clothes-shoulders');
        break;
        case '/clothes-shoulders-interactive-simulator':
            router.loadRoute('clothes-shoulders');
        break;
        case '/clothes-shoulders-virtual-simulator':
            router.loadRoute('clothes-shoulders');
        break;

        case '/phisculture':
            router.loadRoute('');
        break;
        case '/phisculture-video-lesson':
            router.loadRoute('phisculture');
        break;
        case '/phisculture-virtual-simulator':
            router.loadRoute('phisculture');
        break;
        case '/phisculture-interactive-simulator':
            router.loadRoute('phisculture');
        break;

        case '/hotel':
            router.loadRoute('');
        break;
        case '/hotel-video-lesson':
            router.loadRoute('hotel');
        break;
        case '/hotel-virtual-simulator':
            router.loadRoute('hotel');
        break;
        case '/hotel-interactive-simulator':
            router.loadRoute('hotel');
        break;

        case '/phisculture_1':
            router.loadRoute('');
        break;
        case '/phisculture_1-video-lesson':
            router.loadRoute('phisculture_1');
        break;
        case '/phisculture_1-virtual-simulator':
            router.loadRoute('phisculture_1');
        break;
        case '/phisculture_1-interactive-simulator':
            router.loadRoute('phisculture_1');
        break;

        case '/cooking':
            router.loadRoute('');
        break;
        case '/cooking-video-lesson':
            router.loadRoute('cooking');
        break;
        case '/cooking-virtual-simulator':
            router.loadRoute('cooking');
        break;
        case '/cooking-interactive-simulator':
            router.loadRoute('cooking');
        break;

        case '/cocktails':
            router.loadRoute('');
        break;
        case '/cocktails-video-lesson':
            router.loadRoute('cocktails');
        break;
        case '/cocktails-virtual-simulator':
            router.loadRoute('cocktails');
        break;
        case '/cocktails-interactive-simulator':
            router.loadRoute('cocktails');
        break;

        case '/milk':
            router.loadRoute('');
        break;
        case '/milk-video-lesson':
            router.loadRoute('milk');
        break;
        case '/milk-virtual-simulator':
            router.loadRoute('milk');
        break;
        case '/milk-interactive-simulator':
            router.loadRoute('milk');
        break;
    }
}

