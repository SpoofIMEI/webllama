# WebLLama

<p>
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white">
</p>
<b>Webllama is a minimal self hostable web interface for the ollama project.</b>

# Installation and usage
1. Install ollama from https://ollama.com/
2.
```
git clone https://github.com/SpoofIMEI/webllama
cd webllama/
npm i
npm run build
ollama pull dolphin-llama3 #or whatever model you want to use
npm run start
```
3. Start ollama API with `ollama serve`
4. Navigate to http://localhost:3000

# Configuring
If you want to change the model, edit webllama.json in the project root.
Default:
```json
{
    "model": "dolphin-llama3"
}
```

# Screenshots
<img src="https://github.com/user-attachments/assets/64a69614-1e2f-4f96-b9de-76fac90f37ee" width=750>
<img src="https://github.com/user-attachments/assets/b6a99fa3-db69-4b67-968a-b1d44df276a6" width=750>
