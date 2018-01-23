
function getFirstSelector(selector){
  return document.querySelector(selector)
  }

// Second Function
function nestedTarget(){
  return document.querySelector('#nested .target')
}


// Third function
function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < rank.lenght; i++){
    rank[i].innerHTML = parsInt(rank[i].innerHTML) + n

    //for(let j = 0; j < child.lenght; j++){
      //child[j].innerHTML = parsInt(child[j].innerHTML) + n
    }
}


// Fourth function
//function deepestChild(){
  //var id = document.getElementById('grand-node')
  //var children = id.children[3]
  //return children
//}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
