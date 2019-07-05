var result = `/*面试官你好，我叫XXX
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了吧
*我就用代码来介绍吧
*首先准备一些样式
*/

* {
  transition: all 1s; 
}

#code {
  border: 1px solid red;
  padding: 16px;
}

html {
  background : rgb(222,222,222);
  font-size: 16px;
}

/* 我需要一点代码高亮 */

.token.selector {
    color: #690;
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}

.token.comment {
    color: slategray;
}

/* 来加点3D效果 */
#code {
    transform: rotate(360deg);
}
/* 我来介绍一下我自己吧 */
`
var n = 0
var id = setInterval(() => {
    n++
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    code.scrollTop = 10000
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
}, 5)

function fn2() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('div')
    content.className = 'content'
    paper.append(content)
    document.body.append(paper)

}

function fn3(preResult) {
    var result = `
/* 我需要一张白纸 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

#code {
    position: fixed;
    left: 0;
    width: 50%;
    heigh: 100%;
}

#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    background: white;
    width: 100%;
    height: 100%;
}
`
    var md = `
    # 自我介绍

    我叫黄苗杰
    1996年3月31日出生
    计算机科学与技术专业大三本科在读
    希望应聘前端开发岗位

    # 技能介绍

    熟悉 JavaScript、CSS

    # 项目介绍

    1.canvas画板
    2.会动的简历

    # 联系方式
    
    QQ xxxxxxxxxx
    Email xxxxxxxxxx
    手机 xxxxxxxxxx
    `

    var n = 0
    var id = setInterval(() => {
        n++
        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        code.scrollTop = 10000
        styleTag.innerHTML = preResult + result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
            document.querySelector('#paper > .content').innerHTML = marked(md)
            // writeMarkdown(md)
        }
    }, 10)
}

function writeMarkdown(markdown) {
    let domPaper = document.querySelector('#paper > .content')
    var n = 0
    var id = setInterval(() => {
        n++
        domPaper.innerHTML = markdown.substring(0, n)
        if (n >= markdown.length) {
            window.clearInterval(id)
            domPaper.innerHTML = marked(markdown)
        }
    }, 10)
}