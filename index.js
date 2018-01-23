
function getFirstSelector(selector){
  return document.querySelector(selector)
  }

// Second Function
function nestedTarget(){
  return document.querySelector('#nested .target')
}


// Third function
/*function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < rank.lenght; i++){
    rank[i].innerHTML = parsInt(rank[i].innerHTML) + n

  return rank
    //for(let j = 0; j < child.lenght; j++){
      //child[j].innerHTML = parsInt(child[j].innerHTML) + n
    }
}*/

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

// Fourth function
//function deepestChild(){
  //var id = document.getElementById('grand-node')
  //var children = id.children[3]
  //return children
//}

function deepestChild() {
  var getID = document.getElementById('grand-node')
  var children = getID.children[0]

  while (children) {
    getID = children
    children = getID.children[0]
  }
  return getID
}
