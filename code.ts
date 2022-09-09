let pages = [
  "Cover",
  "------",
  "Design - v1 - Em progresso",
  "----------",
  "Components",
  "Fav Icon",
  "----------",
  "Assets",
  "Discovery",
  "References"

]
for (let page of pages){
  let newPage =figma.createPage
  newPage.name = page
}

  figma.closePlugin();

