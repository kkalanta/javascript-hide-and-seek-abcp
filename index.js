
function getFirstSelector(selector){
  return document.querySelector(selector)
  }

// Second Function
function nestedTarget(){
  return document.querySelector('#nested .target')
}


// Third function
function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < rank.length; i++){
    var child = rank[i].child

    for(let j = 0; j < child.length; j++){
      var x = parsInt(child[j]) + n
      return x
    }
  }
}


// Fourth function
function deepestChild(){

}
