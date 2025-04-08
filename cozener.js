function handleMouseUp(){
    let text=window.getSelection().toString();
    if (!text||text.length===0) return;
    //console.log(text);
    
    let extra_question=prompt(`Type:remove to exit\nWhat do you want to do with this text? Explain more or give a prompt:`);
    if(extra_question==="remove"){
        document.removeEventListener('mouseup',handleMouseUp);
    }
    let final_text=text+"\n"+extra_question;

    let API_KEY="GEMINI_API_KEY"
    const data={
        "contents": [{
            "parts":[{"text": `${final_text}`}]
            }]
        }
    
    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).then(json=>{
        console.log("GEMINI RESPONSE:");
        console.log(json.candidates[0].content.parts[0].text);
    }).catch(err => {
        console.error("Error:", err);
    });
}
document.addEventListener('mouseup',handleMouseUp);