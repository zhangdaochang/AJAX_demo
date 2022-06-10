console.log('我是main.js')

let n = 1
getNEXT.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get',`page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status <300){
                const object = JSON.parse(request.response)
                object.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerHTML= `<li>${item.num}</li>`
                    xxx.appendChild(li)
                })
                n+=1
            }else{
                console.log('失败了')
                n=n
                alert(`没有更多了，当前是第${n}页`)
            }
        }
    }
    request.send()
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status >=200 && request.status <300){
                const object = JSON.parse(request.response)
                myname.textContent=object.name
                console.log(object)
            }
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status <300){
                console.log(request.responseXML.getElementsByTagName('warning')[0].textContent.trim())
            }else{
                console.log('出错了')
            }
        }
    }
    request.send()
}

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','3.html')
    request.onload=()=>{
        const html = document.createElement('div')
        html.innerHTML=request.response
        document.body.appendChild(html)
    }
    request.onerror=()=>{}
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send()
}

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()

    request.open('GET','/style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                console.log('成功了')
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                console.log('请求失败:'+request.status)
            }
            
        }
        
    }

    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}