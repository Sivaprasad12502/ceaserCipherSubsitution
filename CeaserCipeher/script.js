const textEle=document.getElementById('encryptText')
const btn=document.getElementById('encryptBtn')
const result=document.getElementById('encryptResult')
btn.addEventListener('click',()=>{
    let input
    input=textEle.value 
    result.innerHTML=encryption(input)
})



encryption=(word)=>{
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
decryption=(word)=>{
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
                let newIndex=(index-3 + arr.length)%arr.length
                result=result+arr[newIndex]
            }
        }
        return result

}
const textareaa=document.querySelector('#decryptText')
const btnn=document.querySelector('#decryptBtn')
const resultt=document.querySelector('#decryptResult')

btnn.addEventListener('click',()=>{
    let inputval
    inputval=textareaa.value
    resultt.innerHTML=decryption(inputval)
})








