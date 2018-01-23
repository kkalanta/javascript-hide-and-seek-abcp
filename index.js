
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

  for(let i = 0; i < rank.lenght; i++){
    rank[i] = parsInt(rank[i]) + n

    //for(let j = 0; j < child.lenght; j++){
      //child[j].innerHTML = parsInt(child[j].innerHTML) + n
    }

}


// Fourth function
function deepestChild(){

}
