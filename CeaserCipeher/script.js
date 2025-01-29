const textEle=document.getElementById('textarea')
const btn=document.getElementById('btn')
const result=document.querySelector('.result')
btn.addEventListener('click',()=>{
    let input
    input=textEle.value 
    result.innerHTML=ceasercipther(input)
})



ceasercipther=(word)=>{
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let result=''
        for(let i=0;i<word.length;i++){
            let letter=word[i]
            if(letter===' '){
                result+=' '
            }
            else{
                let index=arr.indexOf(letter)
                let newIndex=(index+3)%arr.length
                result=result+arr[newIndex]
            }
        }
        return result


}






