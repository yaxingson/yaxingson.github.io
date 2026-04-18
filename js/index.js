"use strict"


const translateIcon = document.querySelector('.icon-translate')
const themeIcon = document.querySelector('.icon-theme')
const icons = document.getElementsByClassName('icon')

const pathEl = document.querySelector('path')

function getCurrentYear() {
  return new Date().getFullYear()
}

function translate() {
  const currentLang = document.body.getAttribute('data-lang')
  document.body.setAttribute('data-lang', currentLang === 'en' ? 'zh-cn' : 'en')

  const container = document.getElementById('about')

  const englishHtml = `
  <h1>Hello.</h1>
  <p>I'm Yaxing Son, an open source enthusiast, and a web developer.</p>
  <p>
    I first encountered programming, especially front-end technologies, during 
    my university years. The desire to share my work with others has been my main 
    motivation for staying passionate about web development. At the same time, 
    I truly enjoy the process of turning an idea into reality—it’s just so cool.
  </p>
  <p>
    In my free time, I write blog posts and occasionally stream programming content 
    on <a href="">Bilibili</a> and <a href="">YouTube</a>. Besides my professional work, I also contribute to open 
    source projects on <a href="">GitHub</a>. If you’ve benefited from my open source work, you can 
    support me financially through <a href="">GitHub Sponsors</a>. Of course, you’re also welcome to 
    follow me on <a href="">X</a> and <a href="">BlueSky</a>, where I sometimes share posts about tech products and trending 
    life topics.
  </p>
  <p>
    Beyond programming, I also enjoy design, photography, and pets. You can learn more about me 
    through my <a href="">Blog</a>. If we share similar interests, feel free to 
    reach out—let’s grab coffee or collaborate on something!
  </p>
  <p>
    <span>&copy;2020-<span id="present">${getCurrentYear()}</span> Yaxing Son</span>
    <span>:)</span>
  </p>
  `
  const chineseHtml = `
  <h1>你好。</h1>
  <p>我是 Yaxing Son，一名开源爱好者，也是一名 Web 开发人员。</p>
  <p>
    我第一次接触编程，尤其是前端技术，是在大学期间。渴望与他人分享我的成果，一直是我保持 Web 
    开发热情的主要动力。同时，我非常享受将想法变成现实的过程——这真的太酷了。
  </p>
  <p>
    闲暇时，我会撰写博客文章，并偶尔在 <a href="">哔哩哔哩</a> 和 <a href="">YouTube</a> 
    上直播编程内容。除了专业工作外，我还在 <a href="">GitHub</a> 上为开源项目做贡献。如果您从
    我的开源工作中受益，您可以通过 <a href="">GitHub 赞助商</a> 为我提供经济支持。当然，也欢迎
    您在 <a href="">X</a> 和 <a href="">BlueSky</a> 上关注我，我有时会在那里分享关于科技
    产品和热门生活话题的帖子。
  </p>
  <p>
    除了编程，我还喜欢设计、摄影和宠物。您可以通过我的<a href="">博客</a>了解更多关于我的信息。
    如果我们有共同的兴趣，欢迎随时联系我们——一起喝杯咖啡，或者合作做点什么！
  </p>
  <p>
    <span>&copy;2020-<span id="present">${getCurrentYear()}</span> Yaxing Son</span>
    <span>:)</span>
  </p>
  `

  container.innerHTML = currentLang === 'en' ? chineseHtml : englishHtml
}

// function toggleTheme() {
//   const currentTheme = document.body.getAttribute('data-theme') || 'light'
//   document.body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light')

//   pathEl.setAttribute('fill', currentTheme === 'light' ? '#acacac' : '#3f3f3f')
  

//   for (const icon of icons) {
//     icon.className = icon.className.replace(/icon-(.+)/, (_, name)=>{
//       return /^dark-/.test(name) ? `icon-${name.slice(5)}` : `icon-dark-${name}`
//     })
//   }
// }

translateIcon.addEventListener('click', translate)

document.getElementById('present').textContent = getCurrentYear()
