function loger()
{
    let h=document.getElementById('happy');
    let n=document.getElementById('normal');
    let s=document.getElementById('sad');
    let d=document.getElementById('disgust');
    let f=document.getElementById('fear');
    let sp=document.getElementById('surprise');
    let a=document.getElementById('angry');


    if(h.innerText.length!=0)
    {
        h.style.backgroundColor='aquamarine';
        n.style.backgroundColor='red';
        s.style.backgroundColor='red';
        d.style.backgroundColor='red';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='red';
    }
    else if(n.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='aquamarine';
        s.style.backgroundColor='red';
        d.style.backgroundColor='red';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='red';
    }
    else if(s.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='red';
        s.style.backgroundColor='aquamarine';
        d.style.backgroundColor='red';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='red';
    }
    else if(d.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='red';
        s.style.backgroundColor='red';
        d.style.backgroundColor='aquamarine';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='red';
    }
    else if(f.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='red';
        s.style.backgroundColor='red';
        d.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='red';
        f.style.backgroundColor='aquamarine';
    }
    
    else if(sp.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='red';
        s.style.backgroundColor='red';
        d.style.backgroundColor='red';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='aquamarine';
        a.style.backgroundColor='red';
    }
    else if(a.innerText.length!=0){
        h.style.backgroundColor='red';
        n.style.backgroundColor='red';
        s.style.backgroundColor='red';
        d.style.backgroundColor='red';
        f.style.backgroundColor='red';
        sp.style.backgroundColor='red';
        a.style.backgroundColor='aquamarine';
    }
    else{
        return;
    }
}
setInterval(loger,1000)