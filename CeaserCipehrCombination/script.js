const textEle=document.getElementById('encryptText')
const btn=document.getElementById('encryptBtn')
const resultEle=document.querySelector('#encryptResult')



btn.addEventListener('click',()=>{
    let inputval
    inputval=textEle.value
    resultEle.innerHTML=encryption(inputval)
})
encryption=(word)=>{

    let value = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let key=   [
            'z', 'a', 'A', 'Z', 'r', 'H', 's', 'Q', 't', 'D', 'u', 'R', 'v', 'X', 'y', 'U', 'p', 'q', 'w', 'x', 'B', 'F', 'o', 'b', 'g', 'V',
            'n', 'T', 'h', 'c', 'f', 'd', 'i', 'W', 'Y', 'j', 'k', 'S', 'P','c','e','l','m','E','I','G','J','L','K','M','N','O'
        ];
    let result=''   
        for(let i=0;i<word.length;i++){
            let letter=word[i]
            if(letter===' '){
                result+=' '
            }
            else{
                let valueIndex=value.indexOf(letter)
                let keyindex=key[valueIndex]
                result=result+keyindex
                 

            }

        }
        return result

       

}
decryption=(word)=>{


    let key= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let value=   [
        'z', 'a', 'A', 'Z', 'r', 'H', 's', 'Q', 't', 'D', 'u', 'R', 'v', 'X', 'y', 'U', 'p', 'q', 'w', 'x', 'B', 'F', 'o', 'b', 'g', 'V',
        'n', 'T', 'h', 'c', 'f', 'd', 'i', 'W', 'Y', 'j', 'k', 'S', 'P','c','e','l','m','E','I','G','J','L','K','M','N','O'
    ];
    let result=''   
        for(let i=0;i<word.length;i++){
            let letter=word[i]
            if(letter===' '){
                result+=' '
            }
            else{
                let valueIndex=value.indexOf(letter)
                let keyindex=key[valueIndex]
                result=result+keyindex
                 

            }

        }
        return result

}

const dcrptxt=document.getElementById('decryptText')
const dcrpbtn=document.getElementById('decryptBtn')
const dcrprslt=document.getElementById('decryptResult')
dcrpbtn.addEventListener('click',()=>{
    let inputval
    inputval=dcrptxt.value
    dcrprslt.innerHTML=decryption(inputval)
})