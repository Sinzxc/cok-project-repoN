content1 = document.getElementById('inf1');
content2 = document.getElementById('inf2');
content3 = document.getElementById('inf3');
content4 = document.getElementById('inf4');
content5 = document.getElementById('inf5');
content6 = document.getElementById('inf6');
content7 = document.getElementById('inf7');
content8 = document.getElementById('inf8');
function read() {
    const url = new URL(window.location.href);
    const doc = url.searchParams.get('docs');
    const doc1 = url.pathname
    let file = '';
    console.log(url)
    switch(doc1) {
        case '/clothes-belts-dynamic-infographic':
            file1 = 'script/markdown/infographics/belts/1.md';
            file2 = 'script/markdown/infographics/belts/2.md';
            file3 = 'script/markdown/infographics/belts/3.md';
            file4 = 'script/markdown/infographics/belts/4.md';
            file5 = 'script/markdown/infographics/belts/5.md';
            break;
        case '/clothes-shoulders-dynamic-infographic':
            file1 = 'script/markdown/infographics/shoulders/1.md';
            file2 = 'script/markdown/infographics/shoulders/2.md';
            file3 = 'script/markdown/infographics/shoulders/3.md';
            file4 = 'script/markdown/infographics/shoulders/4.md';
            file5 = 'script/markdown/infographics/shoulders/5.md';
            file6 = 'script/markdown/infographics/shoulders/6.md';
            file7 = 'script/markdown/infographics/shoulders/7.md';
            file8 = 'script/markdown/infographics/shoulders/8.md';
            break;
        default:
            file1 = '';
            file2 = '';
            file3 = '';
            file4 = '';
            file5 = '';
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
    if (file6 !== '') {
        fetch(file6)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content6.innerHTML = window.marked.marked(response);
            })
    }
    if (file7 !== '') {
        fetch(file7)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content7.innerHTML = window.marked.marked(response);
            })
    }
    if (file8 !== '') {
        fetch(file8)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content8.innerHTML = window.marked.marked(response);
            })
    }
}
if (window.marked) {
    read();
}