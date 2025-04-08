document.addEventListener('mouseup',()=>{
    let text=window.getSelection().toString();
    console.log(text);

    let extra_question=prompt("What do you wnat to do with this text?Expalin more,give a prompt:");
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
});