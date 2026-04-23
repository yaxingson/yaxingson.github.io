"use strict"


const translateIcon = document.querySelector('.icon-translate')
const themeIcon = document.querySelector('.icon-theme')
const icons = document.getElementsByClassName('icon')
const themeList = document.querySelector('.theme-list')
const themeLink = document.getElementById('dynamic-theme')

const pathEl = document.querySelector('path')

function getCurrentYear() {
  return new Date().getFullYear()
}

function translate() {
  const currentLang = document.body.getAttribute('data-lang')
  document.body.setAttribute('data-lang', currentLang === 'en' ? 'zh-cn' : 'en')

  const themeList = document.querySelector('.theme-list')
  const container = document.getElementById('about')

  const aboutEnHtml = `
  <h1>👋🏻 Hello.</h1>
  <p class="about-intro">I am Sun Yaxing,  a web developer and open source enthusiast.</p>
  <p class="about-story">
    I became interested in programming during my senior year of college. After graduation, 
    my first exposure to front-end development made me realize my strong interest in web 
    technologies, and thus began my self-learning journey. I enjoy the process of quickly 
    turning my ideas into projects and sharing them with others—it feels really cool.
  </p>
  <p class="about-activities">
    In my free time, I write blog posts on my <a href="">Blog</a> and occasionally stream programming content 
    on <a href="">Bilibili</a> and <a href="">YouTube</a>. Besides my professional work, I also contribute to open 
    source projects on <a href="">GitHub</a>. If you’ve benefited from my open source work, you can 
    support me financially through <a href="">GitHub Sponsors</a>. Of course, you’re also welcome to 
    follow me on <a href="">X</a> and <a href="">BlueSky</a>, where I sometimes share posts about tech products and trending 
    life topics.
  </p>
  <p class="about-interests">
    Outside of programming, I have a passion for design, photography, and pets. If you share 
    any of these interests, I'd love to connect — whether over coffee or a potential collaboration.
  </p>
  <p>
    <span>&copy;2020-<span id="present">${getCurrentYear()}</span> Yaxing Son</span>
    <span>:)</span>
  </p>
  `
  const aboutZhHtml = `
  <h1>👋🏻 你好。</h1>
  <p class="about-intro">我是孙亚星，一名 Web 开发者和开源爱好者。</p>
  <p class="about-story">
    我在大四那年对编程产生了兴趣。毕业后，第一次接触前端开发让我意识到自己对 Web 技术有着强烈的兴趣，
    我的自学之旅也由此开始。我很享受将自己的想法快速变成项目并与他人分享的过程——这感觉真的很酷。
  </p>
  <p class="about-activities">
    闲暇时，我会在个人<a href="">博客</a>上写写文章，并偶尔在 <a href="">哔哩哔哩</a> 和 <a href="">YouTube</a> 
    上直播编程内容。除了专业工作外，我还在 <a href="">GitHub</a> 上为开源项目做贡献。如果您从
    我的开源工作中受益，您可以通过 <a href="">GitHub 赞助商</a> 为我提供经济支持。当然，也欢迎
    您在 <a href="">X</a> 和 <a href="">BlueSky</a> 上关注我，我有时会在那里分享关于科技
    产品和热门生活话题的帖子。
  </p>
  <p class="about-interests">
    在编程之外，我对设计、摄影和宠物也充满热情。如果你对这些中的任何一项感兴趣，我都很乐意与你交流——无论是
    喝杯咖啡，还是寻求潜在的合作机会。
  </p>
  <p>
    <span>&copy;2020-<span id="present">${getCurrentYear()}</span> Yaxing Son</span>
    <span>:)</span>
  </p>
  `

  const themeEnHtml = `
  <li>Modern</li>
  <li>Retro</li>
  <li>Neo Fauvism</li>
  <li>Win95</li>
  `

  const themeZhHtml = `
  <li>现代</li>
  <li>复古</li>
  <li>新野兽派</li>
  <li>Win95</li>
  `

  themeList.innerHTML = currentLang === 'en' ? themeZhHtml : themeEnHtml
  container.innerHTML = currentLang === 'en' ? aboutZhHtml : aboutEnHtml

}

function toggleTheme(theme) {
  if (theme == 'Modern' || theme == '现代') {
    themeLink.href = '/css/theme/modern.css'
  } else if (theme == 'Retro' || theme == '复古') {
    themeLink.href = '/css/theme/retro.css'
  } else if (theme == 'Neo Fauvism' || theme == '新野兽派') {
    themeLink.href = '/css/theme/neo-fauvism.css'
  } else if (theme == 'Win95') {
    themeLink.href = '/css/theme/win95.css'
  }
}

translateIcon.addEventListener('click', translate)

themeIcon.addEventListener('mouseenter', ev => {
  themeList.style.display = 'block'

})

themeList.addEventListener('mouseleave', ev => {
  themeList.style.display = 'none'
})

themeList.addEventListener('click', ev => {
  if (ev.target.tagName == 'LI') {
    const theme = ev.target.textContent.trim()

    toggleTheme(theme)
    
    localStorage.setItem('selectedTheme', theme)
    
    themeList.style.display = 'none'
  }

})

document.getElementById('present').textContent = getCurrentYear()


const savedTheme = localStorage.getItem('selectedTheme')

if (savedTheme) {
  toggleTheme(savedTheme)
}

