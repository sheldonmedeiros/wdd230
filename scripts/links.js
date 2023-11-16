const baseURL = "https://sheldonmedeiros.github.io/wdd230/";
const linksURL = "https://sheldonmedeiros.github.io/wdd230/data/links.json";
const links = document.querySelector('#links')

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons)
  }

  function displayLinks(weeks){
    weeks.forEach((week)=> {
      let listItem = document.createElement('li')
      listItem.textContent = `${week.lesson} :`
      week.links.forEach((link)=> {
        let linkEle = document.createElement('a')
        linkEle.setAttribute('href', link.url)
        linkEle.textContent = link.title
        listItem.appendChild(linkEle)
      })
      links.appendChild(listItem)
    })
  }

  getLinks();
