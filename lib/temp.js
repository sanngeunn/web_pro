module.exports = {
    HTML:function(name, list, body, control){
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}</title>
        </head>
        <body>
            <h1><a href="/">다이어리 ver.2023</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        `;
    },
    list:function(files){
        let list = '<ol>';
        for(let i=0;i<files.length;i++){
            list+=`<li><a href="?name=${files[i]}">${files[i]}</a></li>`;
        }
        list = list + '</ol>';
        return list;
    },create:function(){
        return `
        <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="제목을 작성하세요."></p>
            <p><textarea name="description" placeholder="내용을 작성하세요."></textarea></p>
            <p><button type="submit">저장</button></p>
        </form>
        `
    },update:function(name, content){
        return `
        <form action="/update_process" method="post">
        <p><input type="hidden" name="id" value=${name}></p>
        <p><input type="text" name="title" placeholder="제목을 작성하세요." value=${name}></p>
        <p><textarea name="description" placeholder="내용을 작성하세요.">${content}</textarea></p>
        <p><button type="submit">저장</button></p>
        </form>
        `
    }
};