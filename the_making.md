## COZENER
---

- `mosueup`/`keyup` event can be used!
- Then ***window.getSelection().toString()*** is used to get text from window!

---
#### CURL
- command line tool used to transnfer data `to` or `from` the ***server***.
- It is used for
    - API tetsing
    - downloading files
    - send data over internet
- `-H` stands for **header**

```bash[]
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
   }'
```

- `content-type` expects **json input**
- `-X` tells we are requesting a ***HTTP method***,here *POST* to send data.
- `-d` defined ***data** bidy of the request.
- `grep` search for a line for the given pattern in the file
- `chmod` makes it executable