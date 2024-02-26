content1 = document.getElementById('aboutContent');
content2 = document.getElementById('keyWords');
content3 = document.getElementById('pop1');
content4 = document.getElementById('pop2');
content5 = document.getElementById('pop3');
function read() {
    const url = new URL(window.location.href);
    const doc = url.searchParams.get('docs');
    const doc1 = url.pathname
    let file = '';
    console.log(url)
    switch(doc1) {
        case '/tourism':
            file1 = 'script/markdown/aboutinfo/tourism-info.md';
            file2 = 'script/markdown/keywords/tourism-key.md';
            file3 = 'script/markdown/recomended/tourism/1.md';
            file4 = 'script/markdown/recomended/tourism/2.md';
            file5 = 'script/markdown/recomended/tourism/3.md';
            break;
        case '/clothes-belts':
            file1 = 'script/markdown/aboutinfo/belts-info.md';
            file2 = 'script/markdown/keywords/belts-key.md';
            file3 = 'script/markdown/recomended/belts/1.md';
            file4 = 'script/markdown/recomended/belts/2.md';
            file5 = 'script/markdown/recomended/belts/3.md';
            break;
        case '/clothes-shoulders':
            file1 = 'script/markdown/aboutinfo/shoulders-info.md';
            file2 = 'script/markdown/keywords/shoulders-key.md';
            file3 = 'script/markdown/recomended/shoulders/1.md';
            file4 = 'script/markdown/recomended/shoulders/2.md';
            file5 = 'script/markdown/recomended/shoulders/3.md';
            break;
        case '/phisculture':
            file1 = 'script/markdown/aboutinfo/phisculture-info.md';
            file2 = 'script/markdown/keywords/phisculture-key.md';
            file3 = 'script/markdown/recomended/phisculture/1.md';
            file4 = 'script/markdown/recomended/phisculture/2.md';
            file5 = 'script/markdown/recomended/phisculture/3.md';
            break;
        case '/phisculture_1':
            file1 = 'script/markdown/aboutinfo/phisculture_1-info.md';
            file2 = 'script/markdown/keywords/phisculture_1-key.md';
            file3 = 'script/markdown/recomended/phisculture_1/1.md';
            file4 = 'script/markdown/recomended/phisculture_1/2.md';
            file5 = 'script/markdown/recomended/phisculture_1/3.md';
            break;
        case '/hotel':
            file1 = 'script/markdown/aboutinfo/hotel-info.md';
            file2 = 'script/markdown/keywords/hotel-key.md';
            file3 = 'script/markdown/recomended/hotel/1.md';
            file4 = 'script/markdown/recomended/hotel/2.md';
            file5 = 'script/markdown/recomended/hotel/3.md';
            break;
        case '/cooking':
            file1 = 'script/markdown/aboutinfo/cooking-info.md';
            file2 = 'script/markdown/keywords/cooking-key.md';
            file3 = 'script/markdown/recomended/cooking/1.md';
            file4 = 'script/markdown/recomended/cooking/2.md';
            file5 = 'script/markdown/recomended/cooking/3.md';
            break;
        case '/cocktails':
            file1 = 'script/markdown/aboutinfo/cocktails-info.md';
            file2 = 'script/markdown/keywords/cocktails-key.md';
            file3 = 'script/markdown/recomended/cocktails/1.md';
            file4 = 'script/markdown/recomended/cocktails/2.md';
            file5 = 'script/markdown/recomended/cocktails/3.md';
            break;
        default:
            file1 = 'script/markdown/aboutinfo/tourism-info.md';
            file2 = 'script/markdown/keywords/tourism-key.md';
            file3 = 'script/markdown/recomended/tourism/1.md';
            file4 = 'script/markdown/recomended/tourism/2.md';
            file5 = 'script/markdown/recomended/tourism/3.md';
            break;

    }
    console.log(doc1)
   if (file1 !== '') {
        fetch(file1)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content1.innerHTML = window.marked.marked(response);
            })
    }
    if (file2 !== '') {
        fetch(file2)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content2.innerHTML = window.marked.marked(response);
            })
    }
    if (file3 !== '') {
        fetch(file3)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content3.innerHTML = window.marked.marked(response);
            })
    }
    if (file4 !== '') {
        fetch(file4)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content4.innerHTML = window.marked.marked(response);
            })
    }
    if (file5 !== '') {
        fetch(file5)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content5.innerHTML = window.marked.marked(response);
            })
    }
}
if (window.marked) {
    read();
}